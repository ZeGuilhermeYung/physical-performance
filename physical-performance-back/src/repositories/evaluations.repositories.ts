import prisma from "../database/db";
import { CreateFunctionalEvaluation, EvaluationFunction, FunctionalEvaluation } from "../protocols/evaluations.protocols";

const createEvaluationFunction: EvaluationFunction = {
  functional: prisma.functionalEvaluations.create
  //physical: prisma.functEvs02.create
};
const findEvaluationFunction: EvaluationFunction = {
  functional: prisma.functionalEvaluations.findFirst
  //physical: prisma.functEvs02.create
};

async function insertEvaluation(evType: string, patientId: number, evOrder: number): Promise<FunctionalEvaluation> {
  const evaluation: FunctionalEvaluation = await createEvaluationFunction[evType]({
    data: {
      patientId,
      evOrder
    }
  });

  return evaluation;
}

async function findEvOrder(evType: string, patientId: number): Promise<number> {
  const evaluation: FunctionalEvaluation = await findEvaluationFunction[evType]({
    where: { patientId },
    orderBy: { evOrder: "desc" }
  });

  return evaluation.evOrder;
}

export const evaluationsRepositories = {
  insertEvaluation,
  findEvOrder
};
