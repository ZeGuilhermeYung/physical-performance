import { Router } from "express";
import patientsRouter from "./patients.routes";
import functEvsRouter from "./functionalEvs.routes";
import errorHandler from "../middlewares/error.handler";

const router = Router();

router.use(patientsRouter);
router.use(functEvsRouter);
router.use(errorHandler);

export default router;