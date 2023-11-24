import { Router } from "express";
import { validateParamsSchema } from "../middlewares/validate.schema";
import { functionalEvaluationSchema } from "../schemas/evaluations.schema";
import { postEvaluation, deleteEvaluation, getEvaluations, getEvaluation } from "../controllers/evaluations.controllers";

const evaluationsRouter = Router();

evaluationsRouter.post('/evaluations/:evType/:patientId', validateParamsSchema(functionalEvaluationSchema), postEvaluation);
evaluationsRouter.delete('/evaluations/:evaluationId', deleteEvaluation);
evaluationsRouter.get('/evaluations/:patientId', getEvaluations);
evaluationsRouter.get('/evaluations/:evType/:evaluationId', getEvaluation);

export default evaluationsRouter;