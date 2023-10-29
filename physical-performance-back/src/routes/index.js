import { Router } from "express";
import patientsRouter from "./patients.routes.js";
import functEvsRouter from "./functionalEvs.routes.js";

const router = Router();

router.use(patientsRouter);
router.use(functEvsRouter);

export default router;