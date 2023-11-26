import { Decimal } from "@prisma/client/runtime/library";

type Include<T, U> = T & U;

export type CommonPhysicalEv = {
  evaluationId: number;
  observation?: string;
};

export type PhysicalEvId = {
  id: number;
};

export type CreatePhysicalEv =
  | CommonPhysicalEv & { frontImage: string; backImage: string; rightImage: string; leftImage: string }
  | CommonPhysicalEv & {
      chest: Decimal;
      abdomen: Decimal;
      rRelaxedBiceps: Decimal;
      rContractedBiceps: Decimal;
      lRelaxedBiceps: Decimal;
      lContractedBiceps: Decimal;
      rRelaxedThigh: Decimal;
      rContractedThigh: Decimal;
      lRelaxedThigh: Decimal;
      lContractedThigh: Decimal;
      rRelaxedCalf: Decimal;
      rContractedCalf: Decimal;
      lRelaxedCalf: Decimal;
      lContractedCalf: Decimal;
    }
  | CommonPhysicalEv & {
      totalBodyWater: Decimal;
      proteins: Decimal;
      minerals: Decimal;
      bodyFatMass: Decimal;
      leanBodyMass: Decimal;
      fatFreeDough: Decimal;
      bony: Decimal;
    }
  | CommonPhysicalEv & {
      weight: Decimal;
      skeletalMuscleMass: Decimal;
      bodyFatMass: Decimal;
    }
  | CommonPhysicalEv & {
      bodyMassIndex: Decimal;
      bodyFatPercentage: Decimal;
      waistHipRatio: Decimal;
      basalMetabolicRate: Decimal;
      fitnessScore: number;
    }
  | CommonPhysicalEv & {
      bodyCompositionAnalysis?: string;
      bodyFatPercentage?: string;
      waistHipRatio?: string;
    };

export type UpdatePhysicalEv = CreatePhysicalEv;

export type PhysicalEv = Include<PhysicalEvId, CreatePhysicalEv>;

export type GetPhysicalEvs = [
  physicalEvsImages?: PhysicalEv,
  physicalEvs01?: PhysicalEv,
  physicalEvs02?: PhysicalEv,
  physicalEvs03?: PhysicalEv,
  physicalEvs04?: PhysicalEv,
  physicalEvs05?: PhysicalEv
];

export type PhysicalEvFunction = {
  [key: string]: (data: any) => Promise<any>;
};

export type CreatePhysicalEvParam = {
  [key: string]: (data: any) => Promise<any>;
};
