import { unprocessableEntity } from "../errors/errors.js";

function validateSchema (schema) {
  return (req, res, next) => {
    const validation = schema.validate (
      req.body,
      { abortEarly: false }
    );
    if (validation.error) {
      const errors = validation.error.details.map((detail) => detail.message);
      throw unprocessableEntity(errors);
    }
    res.locals.body = req.body;
    next();
  };
};

export default validateSchema;