import { notFound } from "../errors/errors";
import { patientsRepositories } from "../repositories/patients.repositories";

function insertNowDate() {
  const now = new Date();
  const offset = 3 * 60;
  const createdAt = new Date(now.getTime() - offset * 60000);

  return createdAt;
}

async function validateNewEvaluation(patientId: string) {

  const patientExists = await patientsRepositories.getPatient(parseInt(patientId));
  if (!patientExists) {
    throw notFound("O paciente não existe no banco de dados!");
  }

  return insertNowDate();
}

export const evaluationServices = {
  insertNowDate,
  validateNewEvaluation
}