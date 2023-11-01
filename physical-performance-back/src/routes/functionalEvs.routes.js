import { Router } from "express";
//import { createFunctEv, changeFunctEv, removeFunctEv, getAllFunctEvs } from "../controllers/functionalEvs.controllers.js";
import validateSchema from "../middlewares/validate.schema.js";
import { functEvSchemas } from "../schemas/functionalEvs.schemas.js";

const functEvsRouter = Router();

//functEvsRouter.get('/patients/:id/functional/:evaluation', getAllFunctEvs);
//functEvsRouter.post('/patients/:id/functional/:evaluation', validateSchema(functEvSchemas), createFunctEv);
//functEvsRouter.patch('/patients/:id/functional/:evaluation', validateSchema(updatePostsSchemas), changeFunctEv);
//unctEvsRouter.delete('/patients/:id/functional/:evaluation', removeFunctEv);


export default functEvsRouter;