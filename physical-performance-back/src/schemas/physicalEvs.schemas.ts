import joi from 'joi';
import { CreatePhysicalEv, UpdatePhysicalEv } from '../protocols/physicalEvs.protocols';

const physicalEvsImagesSchema = joi.object<CreatePhysicalEv>({
  frontImage: joi.string().required(),
  backImage: joi.string().required(),
  rightImage: joi.string().required(),
  leftImage: joi.string().required()
});

const physicalEvs01Schema = joi.object<CreatePhysicalEv>({
  chest: joi.number().min(0).max(999999).required(),
  abdomen: joi.number().min(0).max(999999).required(),
  rRelaxedBiceps: joi.number().min(0).max(999999).required(),
  rContractedBiceps: joi.number().min(0).max(999999).required(),
  lRelaxedBiceps: joi.number().min(0).max(999999).required(),
  lContractedBiceps: joi.number().min(0).max(999999).required(),
  rRelaxedThigh: joi.number().min(0).max(999999).required(),
  rContractedThigh: joi.number().min(0).max(999999).required(),
  lRelaxedThigh: joi.number().min(0).max(999999).required(),
  lContractedThigh: joi.number().min(0).max(999999).required(),
  rRelaxedCalf: joi.number().min(0).max(999999).required(),
  rContractedCalf: joi.number().min(0).max(999999).required(),
  lRelaxedCalf: joi.number().min(0).max(999999).required(),
  lContractedCalf: joi.number().min(0).max(999999).required()
});

const physicalEvs02Schema = joi.object<CreatePhysicalEv>({
  totalBodyWater: joi.number().min(0).max(999999).required(),
  proteins: joi.number().min(0).max(999999).required(),
  minerals: joi.number().min(0).max(999999).required(),
  bodyFatMass: joi.number().min(0).max(999999).required(),
  leanBodyMass: joi.number().min(0).max(999999).required(),
  fatFreeDough: joi.number().min(0).max(999999).required(),
  bony: joi.number().min(0).max(999999).required()
});

const physicalEvs03Schema = joi.object<CreatePhysicalEv>({
  weight: joi.number().min(0).max(999999).required(),
  skeletalMuscleMass: joi.number().min(0).max(999999).required(),
  bodyFatMass: joi.number().min(0).max(999999).required()
});

const physicalEvs04Schema = joi.object<CreatePhysicalEv>({
  bodyMassIndex: joi.number().min(0).max(999999).required(),
  bodyFatPercentage: joi.number().min(0).max(999999).required(),
  waistHipRatio: joi.number().min(0).max(999999).required(),
  basalMetabolicRate: joi.number().min(0).max(999999).required(),
  fitnessScore: joi.number().min(0).max(100).required()
});

const physicalEvs05Schema = joi.object<CreatePhysicalEv>({
  bodyCompositionAnalysis: joi.string(),
  bodyFatPercentage: joi.string(),
  waistHipRatio: joi.string()
});

const updatephysicalEvsImagesSchema = joi.object<UpdatePhysicalEv>({
  frontImage: joi.string(),
  backImage: joi.string(),
  rightImage: joi.string(),
  leftImage: joi.string()
});

const updatephysicalEvs01Schema = joi.object<UpdatePhysicalEv>({
  chest: joi.number().min(0).max(999999),
  abdomen: joi.number().min(0).max(999999),
  rRelaxedBiceps: joi.number().min(0).max(999999),
  rContractedBiceps: joi.number().min(0).max(999999),
  lRelaxedBiceps: joi.number().min(0).max(999999),
  lContractedBiceps: joi.number().min(0).max(999999),
  rRelaxedThigh: joi.number().min(0).max(999999),
  rContractedThigh: joi.number().min(0).max(999999),
  lRelaxedThigh: joi.number().min(0).max(999999),
  lContractedThigh: joi.number().min(0).max(999999),
  rRelaxedCalf: joi.number().min(0).max(999999),
  rContractedCalf: joi.number().min(0).max(999999),
  lRelaxedCalf: joi.number().min(0).max(999999),
  lContractedCalf: joi.number().min(0).max(999999)
});

const updatephysicalEvs02Schema = joi.object<UpdatePhysicalEv>({
  totalBodyWater: joi.number().min(0).max(999999),
  proteins: joi.number().min(0).max(999999),
  minerals: joi.number().min(0).max(999999),
  bodyFatMass: joi.number().min(0).max(999999),
  leanBodyMass: joi.number().min(0).max(999999),
  fatFreeDough: joi.number().min(0).max(999999),
  bony: joi.number().min(0).max(999999)
});

const updatephysicalEvs03Schema = joi.object<UpdatePhysicalEv>({
  weight: joi.number().min(0).max(999999),
  skeletalMuscleMass: joi.number().min(0).max(999999),
  bodyFatMass: joi.number().min(0).max(999999)
});

const updatephysicalEvs04Schema = joi.object<UpdatePhysicalEv>({
  bodyMassIndex: joi.number().min(0).max(999999),
  bodyFatPercentage: joi.number().min(0).max(999999),
  waistHipRatio: joi.number().min(0).max(999999),
  basalMetabolicRate: joi.number().min(0).max(999999),
  fitnessScore: joi.number().min(0).max(100)
});

const updatephysicalEvs05Schema = joi.object<UpdatePhysicalEv>({
  bodyCompositionAnalysis: joi.string(),
  bodyFatPercentage: joi.string(),
  waistHipRatio: joi.string()
});

const physicalEvSchemas = {
  physicalEvsImagesSchema,
  physicalEvs01Schema,
  physicalEvs02Schema,
  physicalEvs03Schema,
  physicalEvs04Schema,
  physicalEvs05Schema,
};

const updatePhysicalEvSchemas = {
  updatephysicalEvsImagesSchema,
  updatephysicalEvs01Schema,
  updatephysicalEvs02Schema,
  updatephysicalEvs03Schema,
  updatephysicalEvs04Schema,
  updatephysicalEvs05Schema
};

export { physicalEvSchemas, updatePhysicalEvSchemas };