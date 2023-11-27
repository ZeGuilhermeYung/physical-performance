import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'; 
import { Evaluation, NewEvaluation } from "../protocols/evaluations.protocols";
import { notFound } from "../errors/errors";
import { patientsRepositories } from "../repositories/patients.repositories";
import functionalEvRepositories from "../repositories/functionalEvs.repositories";
import physicalEvRepositories from "../repositories/physicalEvs.repositories";
import { getFormattedDateDifference } from "./patients.services";

dayjs.extend(utc);

function insertNowDate() {
  const now = new Date();
  const offset = 3 * 60;
  const createdAt = new Date(now.getTime() - offset * 60000);

  return createdAt;
}

function formatTimeToString(date: Date): string {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  const formattedTime = `${hours}h ${minutes}min ${seconds}s`;

  return formattedTime;
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
      const evs = await selectEvaluation(evaluation.evType, evaluation.id);
      const duration = getFormattedDateDifference(new Date(evaluation.finishedAt), new Date(evaluation.createdAt));
      const object = {
        ...evaluation,
        finishedAt: dayjs(evaluation.finishedAt).utc().format('DD/MM/YYYY')
      };

      if (evs.filter(ev => ev === null).length >= 1) {
        return {
          ...object,
          finishedAtTime: null,
          duration: {
            formattedMessage: duration.time === 0 ? "Não iniciada" : "Em andamento",
            time: duration.time
          }
        };
      } else {
        return {
          ...object,
          finishedAtTime: formatTimeToString(new Date(evaluation.finishedAt)),
          duration
        };
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
  if (evType === "physical") {
    const physicalEv = await physicalEvRepositories.getPhysicalEvs(evaluationId);
    return physicalEv;
  }
}

export const evaluationServices = {
  insertNowDate,
  validateNewEvaluation,
  isEvaluationComplete,
  selectEvaluation
}