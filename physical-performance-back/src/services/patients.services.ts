import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'; 
import { conflictError, notFound } from "../errors/errors";
import { patientsRepositories } from "../repositories/patients.repositories";
import { Patient, PatientAge, CreatePatientInfo, PatientInfo } from "../protocols/patients.protocols";

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
      age: returnAge(dayjs(patientInfo.birthdate).format('DD/MM/YYYY'))
    }
  ));
  return formattedPatientsInfo;
}

async function mountPatient(id: string): Promise<Patient> {
  const patient: Patient = await patientsRepositories.getPatient(parseInt(id));

  patient.birthdate = dayjs(patient.birthdate).utc().format('DD/MM/YYYY');

  const patientAge: PatientAge = { ...patient, age: returnAge(patient.birthdate) };

  return patientAge;
}

export const patientsServices = {
  uniquePatient,
  checkPhoto,
  returnAge,
  mountPatientsInfo,
  mountPatient
};