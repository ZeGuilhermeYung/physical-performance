import { Request, Response } from 'express';
import status from 'http-status';
import { physicalEvsServices } from '../services/physicalEvs.services';
import { CreatePhysicalEv, UpdatePhysicalEv } from '../protocols/physicalEvs.protocols';
import { EvaluationParams } from '../protocols/evaluations.protocols';
import { evaluationsRepositories } from '../repositories/evaluations.repositories';
import { evaluationServices } from '../services/evaluations.services';
import physicalEvRepositories from '../repositories/physicalEvs.repositories';

export async function postPhysicalEv(req: Request, res: Response) {
  const { evCategory } = req.params as EvaluationParams;
  const body = req.body as CreatePhysicalEv;

  await physicalEvsServices.mountPhysicalEv(body, evCategory);
  
  const finishedAt = evaluationServices.insertNowDate();
  
  await evaluationsRepositories.updateEvaluation(body.evaluationId, finishedAt);

  res.sendStatus(status.CREATED);
}

export async function updatePhysicalEv(req: Request, res: Response) {
  const { id, evCategory } = req.params as EvaluationParams;
  const body = req.body as UpdatePhysicalEv;

  await physicalEvRepositories.updatePhysicalEv(parseInt(id), body, evCategory);

  res.sendStatus(status.CREATED);
}