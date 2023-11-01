import dayjs from "dayjs";
import { conflictError } from "../errors/errors.js";
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

function correctDate(patientsInfo) {
  patientsInfo = patientsInfo.map(patientInfo => (
    {
      ...patientInfo,
      birthdate: dayjs(patientInfo.birthdate).format('DD-MM-YYYY')
    }
  ));
  console.log(patientsInfo)
  return patientsInfo;
}

export const patientsServices = {
  uniquePatient,
  checkPhoto,
  correctDate
}