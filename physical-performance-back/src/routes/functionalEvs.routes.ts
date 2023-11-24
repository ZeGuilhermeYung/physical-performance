import { Router } from "express";
import { postFunctEv, updateFunctEv } from "../controllers/functionalEvs.controllers";
import selectEvSchema from "../middlewares/selectEv.schema";
import { functEvSchemas } from "../schemas/functionalEvs.schemas";

const functEvsRouter = Router();

functEvsRouter.post('/functEvs/:evCategory/:evType/:evaluationId', selectEvSchema(functEvSchemas), postFunctEv);
functEvsRouter.patch('/functEvs/:evCategory/:functEvId', selectEvSchema(functEvSchemas), updateFunctEv);

export default functEvsRouter;