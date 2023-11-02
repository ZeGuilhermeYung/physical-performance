import dayjs from "dayjs";
import { conflictError, notFound } from "../errors/errors.js";
import { patientsRepositories } from "../repositories/patients.repositories.js";

async function uniquePatient(name) {
  const patientExists = await patientsRepositories.getPatientByName(name);
  if (patientExists) throw conflictError("Este paciente já existe nos registros!");
}

function checkPhoto (photo) {
  const defaultUserImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/768px-User-avatar.svg.png";

  if (!photo) return defaultUserImage;
  return photo;
}

function returnAge(birthdate) {
  const parseBirthdate = birthdate.split("/");
  const birthDay = parseInt(parseBirthdate[0]);
  const birthMonth = parseInt(parseBirthdate[1]) - 1;
  const birthYear = parseInt(parseBirthdate[2]);
  const birthdateObj = new Date(birthYear, birthMonth, birthDay);
  const today = new Date();

  const age = Math.floor(
    (today - birthdateObj) / (1000 * 60 * 60 * 24 * 365.25));

  return age;
}

async function mountPatientsInfo(name) {
  let patientsInfo;

  if (name) {
    patientsInfo = await patientsRepositories.findPatients(name);

    if (!patientsInfo)
      throw notFound("Nenhum paciente encontrado com este nome!");
  } else {
    patientsInfo = await patientsRepositories.getPatients();
  }

  patientsInfo = patientsInfo.map(patientInfo => (
    {
      id: patientInfo.id,
      name: patientInfo.name,
      gender: patientInfo.gender,
      age: returnAge(dayjs(patientInfo.birthdate).format('DD/MM/YYYY'))
    }
  ));
  return patientsInfo;
}

export const patientsServices = {
  uniquePatient,
  checkPhoto,
  returnAge,
  mountPatientsInfo
}