import { Request, Response } from 'express';
import status from 'http-status';
import mountFunctEv from '../services/functionalEvs.services';

async function postFunctEv(req: Request, res: Response) {
  const body = req.body;
  const { patientId, evOrder } = req.params;

  await mountFunctEv(body, patientId, evOrder);

  res.sendStatus(status.CREATED);
}

export default postFunctEv;