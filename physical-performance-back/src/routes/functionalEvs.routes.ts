import { Router } from "express";
import postFunctEv from "../controllers/functionalEvs.controllers";
import validateSchema from "../middlewares/validate.schema";
import { functEvSchemas } from "../schemas/functionalEvs.schemas";

const functEvsRouter = Router();

const functEvsRoutes = [
  'functEvs01',
  'functEvs02',
  'functEvs03',
  'functEvs04',
  'functEvs05',
  'functEvs06',
  'functEvs07',
  'functEvs08',
];

functEvsRoutes.forEach((functEv) => {
  const route = `/patients/:patientId/functional/:evOrder/${functEv}`;
  const functEvSchema = functEvSchemas[`functEv${functEv.slice(-2)}Schema`];

  functEvsRouter.post(route, validateSchema(functEvSchema), postFunctEv);
});
//functEvsRouter.get('/patients/:id/functional/:evaluation', getAllFunctEvs);
//functEvsRouter.patch('/patients/:id/functional/:evaluation', validateSchema(updatePostsSchemas), changeFunctEv);
//unctEvsRouter.delete('/patients/:id/functional/:evaluation', removeFunctEv);


export default functEvsRouter;