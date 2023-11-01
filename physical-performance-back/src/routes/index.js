import { Router } from "express";
import patientsRouter from "./patients.routes.js";
import functEvsRouter from "./functionalEvs.routes.js";
import errorHandler from "../middlewares/error.handler.js";

const router = Router();

router.use(patientsRouter);
router.use(functEvsRouter);
router.use(errorHandler);

export default router;