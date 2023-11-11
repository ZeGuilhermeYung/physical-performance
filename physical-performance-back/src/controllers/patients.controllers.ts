import { Request, Response } from 'express';
import status from 'http-status';
import { patientsRepositories } from '../repositories/patients.repositories';
import { patientsServices } from '../services/patients.services';
import { CreatePatient } from 'protocols/patients.protocols';

export async function postPatient(req: Request, res: Response) {
  const patient = req.body as CreatePatient;

  await patientsServices.uniquePatient(patient.name);

  patient.photo = patientsServices.checkPhoto(patient.photo);

  await patientsRepositories.insertPatient(patient);

  res.sendStatus(status.CREATED);
}

export async function getPatients(req: Request, res: Response) {
  const { name } = req.query;

  const patients = await patientsServices.mountPatientsInfo(name as string);

  res.status(status.OK).send(patients);
}

export async function getPatient(req: Request, res: Response) {
  const { id } = req.params;

  const patient = await patientsServices.mountPatient(id);

  res.status(status.OK).send(patient);
}