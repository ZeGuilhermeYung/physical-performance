import { Request, Response, NextFunction } from 'express';
import joi from 'joi';
import { unprocessableEntity } from '../errors/errors';
import { ValidationResult } from 'protocols/validation.protocols';

function validateSchema(schema: joi.ObjectSchema): (req: Request, res: Response, next: NextFunction) => void {
  return (req: Request, res: Response, next: NextFunction): void => {
    const validation: ValidationResult = schema.validate(req.body, { abortEarly: false });

    if (validation.error) {
      const errors: string[] = validation.error.details.map((detail) => detail.message);
      throw unprocessableEntity(errors);
    }

    res.locals.body = req.body;
    next();
  };
}

export default validateSchema;
