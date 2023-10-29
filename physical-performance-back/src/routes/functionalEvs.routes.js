import { Router } from "express";
import { createFunctEv, changeFunctEv, removeFunctEv, getAllFunctEvs } from "../controllers/functionalEvs.controllers.js";
import validateSchema from "../middlewares/validate.schema.js";
import { functEvSchemas } from "../schemas/functionalEvs.schemas.js";

const functEvsRouter = Router();

functEvsRouter.get('/pacientes/:id/funcional/:avaliacao', getAllFunctEvs);
functEvsRouter.post('/pacientes/:id/funcional/:avaliacao', validateSchema(functEvSchemas), createFunctEv);
functEvsRouter.patch('/pacientes/:id/funcional/:avaliacao', validateSchema(updatePostsSchemas), changeFunctEv);
functEvsRouter.delete('/pacientes/:id/funcional/:avaliacao', removeFunctEv);


export default functEvsRouter;