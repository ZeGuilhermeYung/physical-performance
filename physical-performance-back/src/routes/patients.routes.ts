import { Router } from "express";
import { getPatient, getPatients, postPatient } from "../controllers/patients.controllers";
import { validateSchema } from "../middlewares/validate.schema";
import patientSchema from "../schemas/patients.schemas";

const patientsRouter = Router();

patientsRouter.post('/patients', validateSchema(patientSchema), postPatient);
patientsRouter.get('/patients', getPatients);
patientsRouter.get('/patients/:id', getPatient);

export default patientsRouter;