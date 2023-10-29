import joi from 'joi';

const functEv01Schema = joi.object({
  type: joi.string().min(9).max(10).required(),
  patientId: joi.number().required(),
  evOrder: joi.number().required(),
  iml01: joi.number().min(1).max(1).required(),
  imr01: joi.number().min(1).max(1).required(),
  observation: joi.string().empty('')
});

const functEv02Schema = joi.object({
  type: joi.string().min(9).max(10).required(),
  patientId: joi.number().required(),
  evOrder: joi.number().required(),
  iml02: joi.number().min(1).max(3).required(),
  imr02: joi.number().min(1).max(3).required(),
  observation: joi.string().empty('')
});

const functEv03Schema = joi.object({
  type: joi.string().min(9).max(10).required(),
  patientId: joi.number().required(),
  evOrder: joi.number().required(),
  iml03: joi.string().min(8).max(10).required(),
  imr03: joi.string().min(8).max(10).required(),
  observation: joi.string().empty('')
});

const functEv04Schema = joi.object({
  type: joi.string().min(9).max(10).required(),
  patientId: joi.number().required(),
  evOrder: joi.number().required(),
  iml04: joi.number().min(1).max(3).required(),
  imr04: joi.number().min(1).max(3).required(),
  observation: joi.string().empty('')
});

const functEv05Schema = joi.object({
  type: joi.string().min(9).max(10).required(),
  patientId: joi.number().required(),
  evOrder: joi.number().required(),
  iml05dist: joi.number().min(1).max(5).required(),
  iml05dist: joi.number().min(1).max(5).required(),
  iml05ang: joi.number().min(1).max(3).required(),
  iml05ang: joi.number().min(1).max(3).required(),
  observation: joi.string().empty('')
});

const functEv06Schema = joi.object({
  type: joi.string().min(9).max(10).required(),
  patientId: joi.number().required(),
  evOrder: joi.number().required(),
  iml06quad: joi.number().min(1).max(5).required(),
  iml06quad: joi.number().min(1).max(5).required(),
  iml06isqui: joi.number().min(1).max(5).required(),
  iml06isqui: joi.number().min(1).max(5).required(),
  observation: joi.string().empty('')
});

const functEv07Schema = joi.object({
  type: joi.string().min(9).max(10).required(),
  patientId: joi.number().required(),
  evOrder: joi.number().required(),
  cmj07: joi.number().min(1).max(5).required(),
  iml07sh: joi.number().min(1).max(5).required(),
  imr07sh: joi.number().min(1).max(5).required(),
  observation: joi.string().empty('')
});

const functEv08Schema = joi.object({
  type: joi.string().min(9).max(10).required(),
  patientId: joi.number().required(),
  evOrder: joi.number().required(),
  cmj08: joi.number().min(1).max(5).required(),
  sj08: joi.number().min(1).max(5).required(),
  iml08cmjuni: joi.number().min(1).max(5).required(),
  imr08cmjuni: joi.number().min(1).max(5).required(),
  observation: joi.string().empty('')
});

const functEvSchemas = {
  functEv01Schema,
  functEv02Schema,
  functEv03Schema,
  functEv04Schema,
  functEv05Schema,
  functEv06Schema,
  functEv07Schema,
  functEv08Schema
} ;

export { functEvSchemas };