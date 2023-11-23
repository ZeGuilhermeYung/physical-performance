import prisma from "../database/db";
import { Evaluation } from "../protocols/evaluations.protocols";

async function insertEvaluation(patientId: number, evType: string, createdAt: Date): Promise<Evaluation> {
  const evaluation: Evaluation = await prisma.evaluations.create({
    data: {
      patientId,
      evType,
      createdAt
    }
  });

  return evaluation;
}

async function updateEvaluation(id: number, createdAt: Date): Promise<Evaluation> {
  const evaluation: Evaluation = await prisma.evaluations.update({
    where: { id },
    data: {
      createdAt,
    }
  });
  return evaluation;
}

async function deleteEvaluation(id: number): Promise<Evaluation> {
  return prisma.evaluations.delete({
    where: { id }
  });
}

async function findEvOrder(patientId: number): Promise<Evaluation> {
  const evaluation: Evaluation = await prisma.evaluations.findFirst({
    where: { patientId },
    orderBy: { id: "desc" }
  });

  return evaluation;
}

export const evaluationsRepositories = {
  insertEvaluation,
  updateEvaluation,
  deleteEvaluation,
  findEvOrder
};
