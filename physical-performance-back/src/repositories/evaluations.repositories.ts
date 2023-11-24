import prisma from "../database/db";
import { Evaluation } from "../protocols/evaluations.protocols";
import { GetPatientEvaluations } from "../protocols/patients.protocols";
import { GetFunctionalEvs } from "../protocols/functionalEvs.protocols";

async function insertEvaluation(patientId: number, evType: string, createdAt: Date): Promise<Evaluation> {
  const evaluation: Evaluation = await prisma.evaluations.create({
    data: {
      patientId,
      evType,
      createdAt,
      finishedAt: createdAt
    }
  });

  return evaluation;
}

async function updateEvaluation(id: number, finishedAt: Date): Promise<Evaluation> {
  const evaluation: Evaluation = await prisma.evaluations.update({
    where: { id },
    data: {
      finishedAt,
    }
  });
  return evaluation;
}

async function deleteEvaluation(id: number): Promise<Evaluation> {
  return prisma.evaluations.delete({
    where: { id }
  });
}

async function findLastEvaluation(patientId: number): Promise<Evaluation> {
  const evaluation: Evaluation = await prisma.evaluations.findFirst({
    where: { patientId },
    orderBy: { id: "asc" }
  });

  return evaluation;
}

async function getEvaluations(patientId: number): Promise<Evaluation[]> {
  const evaluations = await prisma.evaluations.findMany({
    where: { patientId },
    orderBy: { finishedAt: 'asc' },
  });

  return evaluations;
}

async function getPatientEvaluations(patientId: number): Promise<GetPatientEvaluations> {
  const patientEvaluations = await prisma.patients.findUnique({
    where: { id: patientId },
    include: {
      evaluations: true
    } 
  });

  return patientEvaluations;
}

export const evaluationsRepositories = {
  insertEvaluation,
  updateEvaluation,
  deleteEvaluation,
  getEvaluations,
  getPatientEvaluations,
  findLastEvaluation
};
