import joi from 'joi';
import { CreateFunctionalEv } from 'protocols/functionalEvs.protocols';

const functEv01Schema = joi.object<CreateFunctionalEv>({
  type: joi.string().min(9).max(10).required(),
  iml01: joi.number().min(1).max(3).required(),
  imr01: joi.number().min(1).max(3).required(),
  observation: joi.string().empty('')
});

const functEv02Schema = joi.object<CreateFunctionalEv>({
  type: joi.string().min(9).max(10).required(),
  iml02: joi.number().min(0).max(360).required(),
  imr02: joi.number().min(0).max(360).required(),
  observation: joi.string().empty('')
});

const functEv03Schema = joi.object<CreateFunctionalEv>({
  type: joi.string().min(9).max(10).required(),
  iml03: joi.string().min(8).max(10).required(),
  imr03: joi.string().min(8).max(10).required(),
  observation: joi.string().empty('')
});

const functEv04Schema = joi.object<CreateFunctionalEv>({
  type: joi.string().min(9).max(10).required(),
  iml04: joi.number().min(0).max(360).required(),
  imr04: joi.number().min(0).max(360).required(),
  observation: joi.string().empty('')
});

const functEv05Schema = joi.object<CreateFunctionalEv>({
  type: joi.string().min(9).max(10).required(),
  iml05dist: joi.number().min(0).max(99999).required(),
  imr05dist: joi.number().min(0).max(99999).required(),
  iml05ang: joi.number().min(0).max(360).required(),
  imr05ang: joi.number().min(0).max(360).required(),
  observation: joi.string().empty('')
});

const functEv06Schema = joi.object<CreateFunctionalEv>({
  type: joi.string().min(9).max(10).required(),
  iml06quad: joi.number().min(0).max(999999).required(),
  imr06quad: joi.number().min(0).max(999999).required(),
  iml06isqui: joi.number().min(0).max(999999).required(),
  imr06isqui: joi.number().min(0).max(999999).required(),
  observation: joi.string().empty('')
});

const functEv07Schema = joi.object<CreateFunctionalEv>({
  type: joi.string().min(9).max(10).required(),
  cmj07: joi.number().min(0).max(999999).required(),
  iml07sh: joi.number().min(0).max(999999).required(),
  imr07sh: joi.number().min(0).max(999999).required(),
  observation: joi.string().empty('')
});

const functEv08Schema = joi.object<CreateFunctionalEv>({
  type: joi.string().min(9).max(10).required(),
  cmj08: joi.number().min(0).max(999999).required(),
  sj08: joi.number().min(0).max(999999).required(),
  iml08cmjuni: joi.number().min(0).max(999999).required(),
  imr08cmjuni: joi.number().min(0).max(999999).required(),
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