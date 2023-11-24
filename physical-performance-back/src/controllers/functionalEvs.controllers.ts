import { Request, Response } from 'express';
import status from 'http-status';
import { functionalEvsServices } from '../services/functionalEvs.services';
import { CreateFunctionalEv, FunctionalEvParams, UpdateFunctionalEv } from '../protocols/functionalEvs.protocols';
import { evaluationsRepositories } from '../repositories/evaluations.repositories';
import { evaluationServices } from '../services/evaluations.services';
import functionalEvRepositories from '../repositories/functionalEvs.repositories';

async function postFunctEv(req: Request, res: Response) {
  const { evType, evaluationId, evCategory } = req.params as FunctionalEvParams;
  const body = req.body as CreateFunctionalEv;

  await functionalEvsServices.mountEvType(body, evType, evCategory, parseInt(evaluationId));
  
  const finishedAt = evaluationServices.insertNowDate();
  
  await evaluationsRepositories.updateEvaluation(parseInt(evaluationId), finishedAt);
  
  res.sendStatus(status.CREATED);
}

async function updateFunctEv(req: Request, res: Response) {
  const { functEvId, evCategory } = req.params as FunctionalEvParams;
  const body = req.body as UpdateFunctionalEv;

  await functionalEvRepositories.updateFunctEv(parseInt(functEvId), body, evCategory);

  res.sendStatus(status.CREATED);
}

export { postFunctEv, updateFunctEv };