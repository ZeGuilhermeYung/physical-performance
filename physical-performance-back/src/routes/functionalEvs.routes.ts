import { Router } from "express";
import { postFunctEv, updateFunctEv } from "../controllers/functionalEvs.controllers";
import selectEvSchema from "../middlewares/selectEv.schema";
import { functEvSchemas, updateFunctEvSchemas } from "../schemas/functionalEvs.schemas";

const functEvsRouter = Router();

functEvsRouter.post('/functEvs/:evCategory', selectEvSchema(functEvSchemas), postFunctEv);
functEvsRouter.patch('/functEvs/:evCategory/:id', selectEvSchema(updateFunctEvSchemas), updateFunctEv);

export default functEvsRouter;