import status from "http-status";
import { patientsRepositories } from "../repositories/patients.repositories";

export async function postPatient (req, res) {
  const { name, email, phone, gender, birthdate,
    domSm, domIm, sports, weigth, height } = req.body;

  await patientsRepositories.
    insertPatients(name, email, phone, gender, birthdate,
      domSm, domIm, sports, weigth, height);

  return res.sendStatus(status.CREATED);
};

export async function getPatients (req, res) {
  const patients = await patientsRepositories.getPatients();

  return res.status(status.CREATED).send(patients);
};

export async function getPatient (req, res) {
  const { id } = req.body;

  const patient = await patientsRepositories.getPatient(id);

  return res.status(status.CREATED).send(patient);
};