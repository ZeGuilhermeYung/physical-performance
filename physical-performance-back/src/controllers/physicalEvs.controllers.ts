import { Request, Response } from 'express';
import status from 'http-status';
import { physicalEvsServices } from '../services/physicalEvs.services';
import { CreatePhysicalEv, PhysicalEvParams, UpdatePhysicalEv } from '../protocols/physicalEvs.protocols';
import { evaluationsRepositories } from '../repositories/evaluations.repositories';
import { evaluationServices } from '../services/evaluations.services';
import physicalEvRepositories from '../repositories/physicalEvs.repositories';

export async function postPhysicalEv(req: Request, res: Response) {
  const { evaluationId, evCategory } = req.params as PhysicalEvParams;
  const body = req.body as CreatePhysicalEv;

  await physicalEvsServices.mountPhysicalEv(body, evCategory, parseInt(evaluationId));
  
  const finishedAt = evaluationServices.insertNowDate();
  
  const batata = await evaluationsRepositories.updateEvaluation(parseInt(evaluationId), finishedAt);
  console.log(batata)
  res.sendStatus(status.CREATED);
}

export async function updatePhysicalEv(req: Request, res: Response) {
  const { physicalEvId, evCategory } = req.params as PhysicalEvParams;
  const body = req.body as UpdatePhysicalEv;

  await physicalEvRepositories.updatePhysicalEv(parseInt(physicalEvId), body, evCategory);

  res.sendStatus(status.CREATED);
}