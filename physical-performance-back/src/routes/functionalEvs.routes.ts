import { Router } from "express";
import { postFunctEv, updateFunctEv } from "../controllers/functionalEvs.controllers";
import { functEvSchemas } from "../schemas/functionalEvs.schemas";
import selectEvSchema from "../middlewares/selectEvSchema";

const functEvsRouter = Router();

functEvsRouter.post('/patients/:patientId/:evType/:evaluationId/:evCategory', selectEvSchema(functEvSchemas), postFunctEv);
functEvsRouter.patch('/patients/:patientId/:evType/:evaluationId/:evCategory/:functEvId', updateFunctEv);

//functEvsRouter.get('/patients/:id/functional/:evaluation', getAllFunctEvs);

export default functEvsRouter;