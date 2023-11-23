import { Router } from "express";
import { validateParamsSchema } from "../middlewares/validate.schema";
import { functionalEvaluationSchema } from "../schemas/evaluations.schema";
import { postEvaluation, deleteEvaluation } from "../controllers/evaluations.controllers";

const evaluationsRouter = Router();

evaluationsRouter.post('/patients/:patientId/:evType', validateParamsSchema(functionalEvaluationSchema), postEvaluation);
evaluationsRouter.delete('/patients/:patientId/:evType/:evaluationId', deleteEvaluation);

export default evaluationsRouter;