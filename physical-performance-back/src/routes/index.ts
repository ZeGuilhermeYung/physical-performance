import { Router } from "express";
import patientsRouter from "./patients.routes";
import functEvsRouter from "./functionalEvs.routes";
import evaluationsRouter from "./evaluations.routes";
import errorHandler from "../middlewares/error.handler";

const router = Router();

router.use(patientsRouter);
router.use(functEvsRouter);
router.use(evaluationsRouter);
router.use(errorHandler);

export default router;