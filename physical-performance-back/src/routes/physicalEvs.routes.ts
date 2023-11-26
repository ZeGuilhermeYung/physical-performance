import { Router } from "express";
import { postPhysicalEv, updatePhysicalEv } from "../controllers/physicalEvs.controllers";
import selectEvSchema from "../middlewares/selectEv.schema";
import { physicalEvSchemas, updatePhysicalEvSchemas } from "../schemas/physicalEvs.schemas";

const physicalEvsRouter = Router();

physicalEvsRouter.post('/physicalEvs/:evCategory', selectEvSchema(physicalEvSchemas), postPhysicalEv);
physicalEvsRouter.patch('/physicalEvs/:evCategory/:id', selectEvSchema(updatePhysicalEvSchemas), updatePhysicalEv);

export default physicalEvsRouter;