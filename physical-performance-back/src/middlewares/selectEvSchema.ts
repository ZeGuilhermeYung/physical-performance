import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';
import { validateSchema } from './validate.schema';
import { CreateFunctionalEv } from '../protocols/functionalEvs.protocols';

type FunctEvSchemas = {
  [key: string]: ObjectSchema<CreateFunctionalEv>;
};

function selectEvSchema(schemas: FunctEvSchemas): (req: Request, res: Response, next: NextFunction) => void {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { evCategory } = req.params;

    validateSchema(schemas[evCategory]);

    next();
  };
}

export default selectEvSchema;