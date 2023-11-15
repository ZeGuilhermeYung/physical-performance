import { Request, Response } from 'express';
import status from 'http-status';
import mountFunctEv from '../services/functionalEvs.services';

async function postFunctEv(req: Request, res: Response) {
  const body = req.body;

  await mountFunctEv(body);

  res.sendStatus(status.CREATED);
}

export default postFunctEv;