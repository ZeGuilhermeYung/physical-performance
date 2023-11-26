import { Router } from "express";
import { validateSchema } from "../middlewares/validate.schema";
import { postEvaluation, deleteEvaluation, getEvaluations, getEvaluation } from "../controllers/evaluations.controllers";
import { evaluationSchema } from "schemas/evaluations.schemas";

const evaluationsRouter = Router();

evaluationsRouter.post('/evaluations', validateSchema(evaluationSchema), postEvaluation);
evaluationsRouter.delete('/evaluations/:id', deleteEvaluation);
evaluationsRouter.get('/evaluations/:patientId', getEvaluations);
evaluationsRouter.get('/evaluations/:evType/:evaluationId', getEvaluation);

export default evaluationsRouter;