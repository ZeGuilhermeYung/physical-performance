import { Request, Response, NextFunction } from 'express';
import joi from 'joi';
import { validateSchema } from './validate.schema';

type EvaluationsTypesSchemas = {
  [key: string]: joi.ObjectSchema;
};

function selectEvSchema(schemas: EvaluationsTypesSchemas): (req: Request, res: Response, next: NextFunction) => void {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { functEvId, physicalEvId, evCategory } = req.params;
    let evSchema: string;
    
    (functEvId || physicalEvId) ? evSchema = `update${evCategory}Schema` : evSchema = `${evCategory}Schema`;
    
    validateSchema(schemas[evSchema])(req, res, next);
  };
}

export default selectEvSchema;