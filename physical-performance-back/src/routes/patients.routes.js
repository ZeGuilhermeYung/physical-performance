import { Router } from "express";
import { getUser, getUserServices } from "../controllers/users.controllers.js";
import { getPatient, getPatients, postPatient } from "../controllers/patients.controllers.js";
import validateSchema from "../middlewares/validate.schema.js";
import patientSchema from "../schemas/patients.schemas.js";

const patientsRouter = Router();

patientsRouter.post('/pacientes', validateSchema(patientSchema), postPatient);
patientsRouter.get('/pacientes', getPatients);
patientsRouter.get('/pacientes/:id', getPatient);

export default patientsRouter;