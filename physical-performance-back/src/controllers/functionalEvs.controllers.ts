import { Request, Response } from 'express';
import status from 'http-status';
import { functionalEvsServices } from '../services/functionalEvs.services';
import { CreateFunctionalEv, UpdateFunctionalEv } from '../protocols/functionalEvs.protocols';
import { EvaluationParams } from '../protocols/evaluations.protocols';
import { evaluationsRepositories } from '../repositories/evaluations.repositories';
import { evaluationServices } from '../services/evaluations.services';
import functionalEvRepositories from '../repositories/functionalEvs.repositories';
export async function postFunctEv(req: Request, res: Response) {
  const { evCategory } = req.params as EvaluationParams;
  const body = req.body as CreateFunctionalEv;

  await functionalEvsServices.mountFunctEv(body, evCategory);
  
  const finishedAt = evaluationServices.insertNowDate();
  
  await evaluationsRepositories.updateEvaluation(body.evaluationId, finishedAt);
  
  res.sendStatus(status.CREATED);
}

export async function updateFunctEv(req: Request, res: Response) {
  const { id, evCategory } = req.params as EvaluationParams;
  const body = req.body as UpdateFunctionalEv;

  await functionalEvRepositories.updateFunctEv(parseInt(id), body, evCategory);

  res.sendStatus(status.CREATED);
}