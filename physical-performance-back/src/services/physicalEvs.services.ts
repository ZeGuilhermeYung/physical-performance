import { Decimal } from "@prisma/client/runtime/library";
import { CreatePhysicalEv, PhysicalEv } from "../protocols/physicalEvs.protocols";
import physicalEvRepositories from "../repositories/physicalEvs.repositories";

async function mountPhysicalEv(body: CreatePhysicalEv, evCategory: string): Promise<PhysicalEv> {
  const { evaluationId } = body;
  
  switch (evCategory) {
    case "physicalEvsImages":
      const bodyImages = body as { frontImage: string; backImage: string; rightImage: string; leftImage: string };
      const physicalEvsImages = await physicalEvRepositories.insertPhysicalEv({
        evaluationId,
        frontImage: bodyImages.frontImage,
        backImage: bodyImages.backImage,
        rightImage: bodyImages.rightImage,
        leftImage: bodyImages.leftImage
      }, evCategory);
      return physicalEvsImages;

    case "physicalEvs01":
      const body01 = body as { chest: Decimal; abdomen: Decimal; rRelaxedBiceps: Decimal; rContractedBiceps: Decimal; lRelaxedBiceps: Decimal; lContractedBiceps: Decimal; rRelaxedThigh: Decimal; rContractedThigh: Decimal; lRelaxedThigh: Decimal; lContractedThigh: Decimal; rRelaxedCalf: Decimal; rContractedCalf: Decimal; lRelaxedCalf: Decimal; lContractedCalf: Decimal };
      const physicalEvs01 = await physicalEvRepositories.insertPhysicalEv({
        evaluationId,
        ...body01
      }, evCategory);
      return physicalEvs01;

    case "physicalEvs02":
      const body02 = body as { totalBodyWater: Decimal; proteins: Decimal; minerals: Decimal; bodyFatMass: Decimal; leanBodyMass: Decimal; fatFreeDough: Decimal; bony: Decimal };
      const physicalEvs02 = await physicalEvRepositories.insertPhysicalEv({
        evaluationId,
        ...body02
      }, evCategory);
      return physicalEvs02;

    case "physicalEvs03":
      const body03 = body as { weight: Decimal; skeletalMuscleMass: Decimal; bodyFatMass: Decimal };
      const physicalEvs03 = await physicalEvRepositories.insertPhysicalEv({
        evaluationId,
        ...body03
      }, evCategory);
      return physicalEvs03;

    case "physicalEvs04":
      const body04 = body as { bodyMassIndex: Decimal; bodyFatPercentage: Decimal; waistHipRatio: Decimal; basalMetabolicRate: Decimal; fitnessScore: number };
      const physicalEvs04 = await physicalEvRepositories.insertPhysicalEv({
        evaluationId,
        ...body04
      }, evCategory);
      return physicalEvs04;

    case "physicalEvs05":
      const body05 = body as { bodyCompositionAnalysis: string; bodyFatPercentage: string; waistHipRatio: string };
      const physicalEvs05 = await physicalEvRepositories.insertPhysicalEv({
        evaluationId,
        ...body05
      }, evCategory);
      return physicalEvs05;

    default:
      break;
  }
}

export const physicalEvsServices = {
  mountPhysicalEv
};