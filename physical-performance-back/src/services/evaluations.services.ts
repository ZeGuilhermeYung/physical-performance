import { Evaluation, NewEvaluation } from "../protocols/evaluations.protocols";
import { notFound } from "../errors/errors";
import { patientsRepositories } from "../repositories/patients.repositories";
import functionalEvRepositories from "../repositories/functionalEvs.repositories";

function insertNowDate() {
  const now = new Date();
  const offset = 3 * 60;
  const createdAt = new Date(now.getTime() - offset * 60000);

  return createdAt;
}

async function validateNewEvaluation(patientId: string) {

  const patientExists = await patientsRepositories.getPatient(parseInt(patientId));
  if (!patientExists) {
    throw notFound("O aluno não existe no banco de dados!");
  }

  return insertNowDate();
}

async function isEvaluationComplete(evaluations: Evaluation[] | null) {
  if (evaluations.length === 0) {
    return null;
  }
  const newEvaluations: NewEvaluation[] = await Promise.all(
    evaluations.map(async (evaluation) => {
      const functEvs = await functionalEvRepositories.getFunctEvs(evaluation.id);

      if (functEvs.filter((functEv) => functEv === null).length >= 1) {
        return { ...evaluation, complete: false };
      } else {
        return { ...evaluation, complete: true };
      }
    })
  );

  return newEvaluations;
}

async function selectEvaluation(evType: string, evaluationId: number) {
  if (evType === "functional") {
    const functionalEv = await functionalEvRepositories.getFunctEvs(evaluationId);
    return functionalEv;
  }
}

export const evaluationServices = {
  insertNowDate,
  validateNewEvaluation,
  isEvaluationComplete,
  selectEvaluation
}