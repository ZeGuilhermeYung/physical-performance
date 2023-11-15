import { Request, Response } from 'express';
import status from 'http-status';
import { evaluationsRepositories } from '../repositories/evaluations.repositories';
import { evaluationServices } from '../services/evaluations.services';

async function postEvaluation(req: Request, res: Response) {
  const { evType, patientId } = req.params;

  const evOrder = await evaluationServices.validateNewEvaluation(evType, patientId);

  await evaluationsRepositories.insertEvaluation(evType, parseInt(patientId), evOrder);

  res.sendStatus(status.CREATED);
}

export default postEvaluation;