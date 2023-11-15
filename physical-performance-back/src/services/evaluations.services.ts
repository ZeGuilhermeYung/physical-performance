import { notFound } from "../errors/errors";
import { patientsRepositories } from "../repositories/patients.repositories";
import { evaluationsRepositories } from "../repositories/evaluations.repositories";

async function validateNewEvaluation(evType: string, patientId: string) {

  const patientExists = await patientsRepositories.getPatient(parseInt(patientId));
  if (!patientExists) {
    throw notFound("O paciente não existe no banco de dados!");
  }

  const evOrder = await evaluationsRepositories.findEvOrder(evType, parseInt(patientId)) + 1;

  return evOrder;
}

export const evaluationServices = {
  validateNewEvaluation
}