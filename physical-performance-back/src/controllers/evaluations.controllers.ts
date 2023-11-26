import { Request, Response } from 'express';
import status from 'http-status';
import { evaluationsRepositories } from '../repositories/evaluations.repositories';
import { evaluationServices } from '../services/evaluations.services';

async function postEvaluation(req: Request, res: Response) {
  const { patientId, evType } = req.body;
  const createdAt = await evaluationServices.validateNewEvaluation(patientId);

  await evaluationsRepositories.insertEvaluation(patientId, evType, createdAt);

  res.sendStatus(status.CREATED);
}

async function deleteEvaluation(req: Request, res: Response) {
  const { id } = req.params;

  await evaluationsRepositories.deleteEvaluation(parseInt(id));

  res.sendStatus(status.CREATED);
}

async function getEvaluations(req: Request, res: Response) {
  const { patientId } = req.params;

  const evaluations = await evaluationsRepositories.getEvaluations(parseInt(patientId));

  res.status(status.OK).send(evaluations);
}

async function getEvaluation(req: Request, res: Response) {
  const { evType, evaluationId } = req.params;

  const evaluation = await evaluationServices.selectEvaluation(evType, parseInt(evaluationId));

  res.status(status.OK).send(evaluation);
}

export { postEvaluation, deleteEvaluation, getEvaluations, getEvaluation };