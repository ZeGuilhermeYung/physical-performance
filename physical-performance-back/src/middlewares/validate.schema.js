import { functEvSchemas } from "../schemas/functionalEvs.schemas";

function validateSchema (schema) {
  return (req, res, next) => {
    if (schema === functEvSchemas) {
      const { type } = req.body;
      schema = `${schema}.${type}Schemas`;
    }
    const validation = schema.validate (
      req.body,
      { abortEarly: false }
    );
    if (validation.error) {
      const errors = validation.error.details.map((detail) => detail.message);
      console.log(errors);
      return res.status(400).send(errors);
    }
    res.locals.body = req.body;
    next();
  };
};

export default validateSchema;