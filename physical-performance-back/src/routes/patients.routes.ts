import { Router } from "express";
import { getPatient, getPatients, postPatient, updatePatient } from "../controllers/patients.controllers";
import { validateSchema } from "../middlewares/validate.schema";
import { patientSchema, updatePatientSchema } from "../schemas/patients.schemas";

const patientsRouter = Router();

patientsRouter.post('/patients', validateSchema(patientSchema), postPatient);
patientsRouter.patch('/patients/:id', validateSchema(updatePatientSchema), updatePatient);
patientsRouter.get('/patients', getPatients);
patientsRouter.get('/patients/:id', getPatient);

export default patientsRouter;