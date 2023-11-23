import { Request, Response } from 'express';
import status from 'http-status';
import { evaluationsRepositories } from '../repositories/evaluations.repositories';
import { evaluationServices } from '../services/evaluations.services';

async function postEvaluation(req: Request, res: Response) {
  const { patientId, evType } = req.params;

  const createdAt = await evaluationServices.validateNewEvaluation(patientId);

  await evaluationsRepositories.insertEvaluation(parseInt(patientId), evType, createdAt);

  res.sendStatus(status.CREATED);
}

async function deleteEvaluation(req: Request, res: Response) {
  const { evaluationId } = req.params;

  await evaluationsRepositories.deleteEvaluation(parseInt(evaluationId));

  res.sendStatus(status.CREATED);
}

export { postEvaluation, deleteEvaluation };