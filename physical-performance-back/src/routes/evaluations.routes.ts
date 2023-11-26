import { Router } from "express";
import { postEvaluation, deleteEvaluation, getEvaluations, getEvaluation } from "../controllers/evaluations.controllers";

const evaluationsRouter = Router();

evaluationsRouter.post('/evaluations/:evType/:patientId', postEvaluation);
evaluationsRouter.delete('/evaluations/:evaluationId', deleteEvaluation);
evaluationsRouter.get('/evaluations/:patientId', getEvaluations);
evaluationsRouter.get('/evaluations/:evType/:evaluationId', getEvaluation);

export default evaluationsRouter;