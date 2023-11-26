import joi from 'joi';
import { CreateEvaluation } from '../protocols/evaluations.protocols';

const evaluationSchema = joi.object<CreateEvaluation>({
  evType: joi.string().min(8).max(10).required(),
  patientId: joi.number().required()
});

export { evaluationSchema };