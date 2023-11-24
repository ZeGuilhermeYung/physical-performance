import { Request, Response, NextFunction } from 'express';
import joi from 'joi';
import { validateSchema } from './validate.schema';

type FunctEvSchemas = {
  [key: string]: joi.ObjectSchema;
};

function selectEvSchema(schemas: FunctEvSchemas): (req: Request, res: Response, next: NextFunction) => void {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { evCategory } = req.params;
    const evSchema = `${evCategory}Schema`;
    
    validateSchema(schemas[evSchema])(req, res, next);
  };
}

export default selectEvSchema;