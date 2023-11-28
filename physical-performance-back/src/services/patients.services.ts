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

export function getFormattedDateDifference(currentDate: Date, targetDate: Date): {formattedMessage: string, time: number} {
  const timeDifference = currentDate.getTime() - targetDate.getTime();

  if (currentDate < new Date()) {
    const seconds = Math.floor(timeDifference / 1000);
    if (seconds < 60) return {
      formattedMessage: `${seconds}s`,
      time: seconds
    };

    const minutes = Math.floor(seconds / 60);
    const remainingSecondsAfterMinutes = seconds % 60;
    if (minutes < 60) return {
      formattedMessage: `${minutes}min ${remainingSecondsAfterMinutes}s`,
      time: seconds
    };
     
    const hours = Math.floor(minutes / 60);
    const remainingMinutesAfterHours = seconds % 3600;
    const remainingSecondsAfterHours = seconds % 3600;
    if (hours < 24) return {
      formattedMessage: `${hours}h ${remainingMinutesAfterHours}min ${remainingSecondsAfterHours}s`,
      time: seconds
    };
  }
  
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (currentDate >= new Date()) {
    if (days === 0) return { formattedMessage: "Hoje", time: days};
    if (days === 1) return { formattedMessage: "Ontem", time: days};
    if (days === 2) return { formattedMessage: "Anteontem", time: days};
    if (days === 7) return { formattedMessage: "Há uma semana", time: days};
    if (days === 14 || days === 21 || days === 28)
      return { formattedMessage: `Há ${days / 7} semanas`, time: days};
  }

  const years = Math.floor(days / 365);
  const remainingDaysAfterYears = days % 365;
  const months = Math.floor(remainingDaysAfterYears / 30);
  const remainingDays = remainingDaysAfterYears % 30;

  const yearText = years > 0 ? `${years} ano${years > 1 ? 's' : ''}` : '';
  const monthText = months > 0 ? `${months} ${months > 1 ? 'meses' : 'mês'}` : '';
  const dayText = remainingDays > 0 ? `${remainingDays} dia${remainingDays > 1 ? 's' : ''}` : '';

  const parts = [yearText, monthText, dayText].filter(Boolean);
  const formattedMessage = currentDate >= new Date() ? 
    `Há ${parts.join(' ')}`
    : `${parts.join(' ')}`;

  return { formattedMessage, time: days };
}

async function mountPatientsInfo(name?: string): Promise<PatientInfo[]> {
  let patientsInfo: CreatePatientInfo[];
  
  if (name) {
    patientsInfo = await patientsRepositories.getPatients(name);

    if (patientsInfo.length === 0)
      throw notFound("Nenhum paciente encontrado com este nome!");
  } else {
    patientsInfo = await patientsRepositories.getPatients();
  }
  console.log(patientsInfo)
  const formattedPatientsInfo: PatientInfo[] = patientsInfo.map(patientInfo => (
    {
      id: patientInfo.id,
      name: patientInfo.name,
      gender: patientInfo.gender,
      age: returnAge(dayjs(patientInfo.birthdate).utc().format('DD/MM/YYYY')),
      lastEvDate: patientInfo.evaluations ?
        getFormattedDateDifference(new Date(), patientInfo.evaluations.finishedAt)
        : {formattedMessage: "Nunca", time: 0}
    }
  ));

  return formattedPatientsInfo;
}

async function mountPatient(id: string): Promise<Patient> {
  const patient: Patient = await patientsRepositories.getPatient(parseInt(id));
  const evaluations = await evaluationsRepositories.getPatientEvaluations(parseInt(id));
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