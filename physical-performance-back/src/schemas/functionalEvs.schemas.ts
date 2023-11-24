import joi from 'joi';
import { CreateFunctionalEv } from '../protocols/functionalEvs.protocols';

const functEvs01Schema = joi.object<CreateFunctionalEv>({
  iml01: joi.number().min(1).max(3).required(),
  imr01: joi.number().min(1).max(3).required(),
  observation: joi.string().empty('')
});

const functEvs02Schema = joi.object<CreateFunctionalEv>({
  iml02: joi.number().min(0).max(360).required(),
  imr02: joi.number().min(0).max(360).required(),
  observation: joi.string().empty('')
});

const functEvs03Schema = joi.object<CreateFunctionalEv>({
  iml03: joi.string().min(8).max(10).required(),
  imr03: joi.string().min(8).max(10).required(),
  observation: joi.string().empty('')
});

const functEvs04Schema = joi.object<CreateFunctionalEv>({
  iml04: joi.number().min(0).max(360).required(),
  imr04: joi.number().min(0).max(360).required(),
  observation: joi.string().empty('')
});

const functEvs05Schema = joi.object<CreateFunctionalEv>({
  iml05dist: joi.number().min(0).max(99999).required(),
  imr05dist: joi.number().min(0).max(99999).required(),
  iml05ang: joi.number().min(0).max(360).required(),
  imr05ang: joi.number().min(0).max(360).required(),
  observation: joi.string().empty('')
});

const functEvs06Schema = joi.object<CreateFunctionalEv>({
  iml06quad: joi.number().min(0).max(999999).required(),
  imr06quad: joi.number().min(0).max(999999).required(),
  iml06isqui: joi.number().min(0).max(999999).required(),
  imr06isqui: joi.number().min(0).max(999999).required(),
  observation: joi.string().empty('')
});

const functEvs07Schema = joi.object<CreateFunctionalEv>({
  cmj07: joi.number().min(0).max(999999).required(),
  iml07sh: joi.number().min(0).max(999999).required(),
  imr07sh: joi.number().min(0).max(999999).required(),
  observation: joi.string().empty('')
});

const functEvs08Schema = joi.object<CreateFunctionalEv>({
  cmj08: joi.number().min(0).max(999999).required(),
  sj08: joi.number().min(0).max(999999).required(),
  iml08cmjuni: joi.number().min(0).max(999999).required(),
  imr08cmjuni: joi.number().min(0).max(999999).required(),
  observation: joi.string().empty('')
});

const functEvSchemas = {
  functEvs01Schema,
  functEvs02Schema,
  functEvs03Schema,
  functEvs04Schema,
  functEvs05Schema,
  functEvs06Schema,
  functEvs07Schema,
  functEvs08Schema
} ;

export { functEvSchemas };