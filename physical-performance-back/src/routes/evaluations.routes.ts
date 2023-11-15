import { Router } from "express";
import { validateParamsSchema } from "../middlewares/validate.schema";
import { functionalEvaluationSchema } from "../schemas/evaluations.schema";
import postEvaluation from "../controllers/evaluations.controllers";

const evaluationsRouter = Router();

evaluationsRouter.post('/patients/:patientId/:evType', validateParamsSchema(functionalEvaluationSchema), postEvaluation);

export default evaluationsRouter;