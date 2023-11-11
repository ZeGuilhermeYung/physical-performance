import { Router } from "express";
import postFunctEv from "../controllers/functionalEvs.controllers";
import validateSchema from "../middlewares/validate.schema";
import { functEvSchemas } from "../schemas/functionalEvs.schemas";

const functEvsRouter = Router();

//functEvsRouter.get('/patients/:id/functional/:evaluation', getAllFunctEvs);
functEvsRouter.post('/patients/:patientId/functional/:evOrder/functEvs01', validateSchema(functEvSchemas.functEv01Schema), postFunctEv);
functEvsRouter.post('/patients/:patientId/functional/:evOrder/functEvs02', validateSchema(functEvSchemas.functEv02Schema), postFunctEv);
functEvsRouter.post('/patients/:patientId/functional/:evOrder/functEvs03', validateSchema(functEvSchemas.functEv03Schema), postFunctEv);
functEvsRouter.post('/patients/:patientId/functional/:evOrder/functEvs04', validateSchema(functEvSchemas.functEv04Schema), postFunctEv);
functEvsRouter.post('/patients/:patientId/functional/:evOrder/functEvs05', validateSchema(functEvSchemas.functEv05Schema), postFunctEv);
functEvsRouter.post('/patients/:patientId/functional/:evOrder/functEvs06', validateSchema(functEvSchemas.functEv06Schema), postFunctEv);
functEvsRouter.post('/patients/:patientId/functional/:evOrder/functEvs07', validateSchema(functEvSchemas.functEv07Schema), postFunctEv);
functEvsRouter.post('/patients/:patientId/functional/:evOrder/functEvs08', validateSchema(functEvSchemas.functEv08Schema), postFunctEv);
//functEvsRouter.patch('/patients/:id/functional/:evaluation', validateSchema(updatePostsSchemas), changeFunctEv);
//unctEvsRouter.delete('/patients/:id/functional/:evaluation', removeFunctEv);


export default functEvsRouter;