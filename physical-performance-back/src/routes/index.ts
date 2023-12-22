import { Router } from "express";
import patientsRouter from "./patients.routes";
import evaluationsRouter from "./evaluations.routes";
import functEvsRouter from "./functionalEvs.routes";
import physicalEvsRouter from "./physicalEvs.routes";
import errorHandler from "../middlewares/error.handler";

const router = Router();

router.use(patientsRouter);
router.use(evaluationsRouter);
router.use(functEvsRouter);
router.use(physicalEvsRouter);
router.use(errorHandler);

export default router;