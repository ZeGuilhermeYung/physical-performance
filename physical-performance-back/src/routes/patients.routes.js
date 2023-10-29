import { Router } from "express";
import { getUser, getUserServices } from "../controllers/users.controllers.js";

const patientsRouter = Router();

patientsRouter.get('/pacientes', getUser);
patientsRouter.get('/pacientes/:id', getUserServices);

export default patientsRouter;