import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'; 
import { conflictError, notFound } from "../errors/errors";
import { patientsRepositories } from "../repositories/patients.repositories";
import { Patient, PatientEvaluations, CreatePatientInfo, PatientInfo } from "../protocols/patients.protocols";
import { evaluationsRepositories } from "../repositories/evaluations.repositories";
import { evaluationServices } from "./evaluations.services";

dayjs.extend(utc);

async function uniquePatient(name: string) {
  const patientExists = await patientsRepositories.getPatientByName(name);
  if (patientExists) throw conflictError("Este paciente já existe nos registros!");
}

function checkPhoto(photo: string | null): string {
  const defaultUserImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/768px-User-avatar.svg.png";

  if (!photo) return defaultUserImage;
  return photo;
}

function returnAge(birthdate: string): number {
  const parseBirthdate = birthdate.split("/");
  const birthDay = parseInt(parseBirthdate[0]);
  const birthMonth = parseInt(parseBirthdate[1]) - 1;
  const birthYear = parseInt(parseBirthdate[2]);
  const birthdateObj = new Date(birthYear, birthMonth, birthDay);
  const today = new Date();

  const age = Math.floor(
    (today.getTime() - birthdateObj.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
  );
  

  return age;
}

export function getFormattedDateDifference(targetDate: Date): string {
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - targetDate.getTime();
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  if (days === 0) {
    const hourText = hours > 0 ? `${hours}h` : '';
    const minuteText = minutes > 0 ? `${minutes}min` : '';
    const secondText = seconds > 0 ? `${seconds}s` : '';

    const parts = [hourText, minuteText, secondText].filter(Boolean);
    const formattedMessage = parts.length > 0 ? `Há ${parts.join(' ')}` : 'Menos de um dia';

    return formattedMessage;
  }

  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  const yearText = years > 0 ? `${years} ano${years > 1 ? 's' : ''}` : '';
  const monthText = months > 0 ? `${months} ${months > 1 ? 'meses' : 'mês'}` : '';
  const dayText = days > 0 ? `${days} dia${days > 1 ? 's' : ''}` : '';

  const parts = [yearText, monthText, dayText].filter(Boolean);
  const formattedMessage = `Há ${parts.join(', ')}`;

  return formattedMessage;
}

async function mountPatientsInfo(name?: string): Promise<PatientInfo[]> {
  let patientsInfo: CreatePatientInfo[];

  if (name) {
    patientsInfo = await patientsRepositories.findPatients(name);

    if (!patientsInfo)
      throw notFound("Nenhum paciente encontrado com este nome!");
  } else {
    patientsInfo = await patientsRepositories.getPatients();
  }

  

  const formattedPatientsInfo: PatientInfo[] = patientsInfo.map(patientInfo => (
    {
      id: patientInfo.id,
      name: patientInfo.name,
      gender: patientInfo.gender,
      age: returnAge(dayjs(patientInfo.birthdate).format('DD/MM/YYYY')),
      lastEvDate: getFormattedDateDifference(patientInfo.evaluations.createdAt)
    }
  ));
  return formattedPatientsInfo;
}

async function mountPatient(id: string): Promise<Patient> {
  const patient: Patient = await patientsRepositories.getPatient(parseInt(id));
  const evaluations = await evaluationsRepositories.getEvaluations(parseInt(id));
  const newEvaluations = await evaluationServices.isEvaluationComplete(evaluations.evaluations);

  patient.birthdate = dayjs(patient.birthdate).utc().format('DD/MM/YYYY');

  const patientEvaluations: PatientEvaluations = { ...patient, age: returnAge(patient.birthdate), evaluations: newEvaluations };

  return patientEvaluations;
}

export const patientsServices = {
  uniquePatient,
  checkPhoto,
  returnAge,
  mountPatientsInfo,
  mountPatient
};