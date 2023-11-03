import status from "http-status";
import { patientsRepositories } from "../repositories/patients.repositories.js";
import { patientsServices } from "../services/patients.services.js";

export async function postPatient (req, res) {
  const { name, email, phone, photo, gender, birthdate,
    domSm, domIm, sports, weight, height } = req.body;
  
  await patientsServices.uniquePatient(name);

  const image = patientsServices.checkPhoto(photo);

  await patientsRepositories.
    insertPatient(name, email, phone, image, gender, birthdate,
      domSm, domIm, sports, weight, height);

  return res.sendStatus(status.CREATED);
};

export async function getPatients (req, res) {
  const { name } = req.query;

  const patients = await patientsServices.mountPatientsInfo(name);

  return res.status(status.CREATED).send(patients);
};

export async function getPatient (req, res) {
  const { id } = req.params;

  const patient = await patientsServices.mountPatient(id);

  return res.status(status.CREATED).send(patient);
};