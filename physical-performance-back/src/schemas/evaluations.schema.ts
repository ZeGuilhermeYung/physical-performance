import joi from 'joi';
import { EvaluationParams } from '../protocols/evaluations.protocols';

const functionalEvaluationSchema = joi.object<EvaluationParams>({
  evType: joi.string().required(),
  patientId: joi.string().required()
});

export { functionalEvaluationSchema };