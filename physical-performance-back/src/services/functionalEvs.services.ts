import { Decimal } from "@prisma/client/runtime/library";
import { CreateFunctionalEv, FunctionalEv } from "../protocols/functionalEvs.protocols";
import functionalEvRepositories from "../repositories/functionalEvs.repositories";

async function mountFunctEv(body: CreateFunctionalEv, evCategory: string): Promise<FunctionalEv> {
  const { evaluationId, observation } = body;
 
  switch (evCategory) {
    case "functEvs01":
      const body01 = body as { iml01: number; imr01: number; observation?: string };
      const functEvs01 =  functionalEvRepositories.insertFunctEv({
        evaluationId,
        iml01: body01.iml01,
        imr01: body01.imr01,
        observation,
      }, evCategory);
      return functEvs01;

      case "functEvs02":
        const body02 = body as { iml02: number; imr02: number; observation?: string };
        const functEvs02 = await functionalEvRepositories.insertFunctEv({
          evaluationId,
          iml02: body02.iml02,
          imr02: body02.imr02,
          observation,
        }, evCategory);
        return functEvs02;

      case "functEvs03":
        const body03 = body as { iml03: string; imr03: string; observation?: string };
        const functEvs03 = await functionalEvRepositories.insertFunctEv({
          evaluationId,
          iml03: body03.iml03,
          imr03: body03.imr03,
          observation,
        }, evCategory);
        return functEvs03;

      case "functEvs04":
        const body04 = body as { iml04: number; imr04: number; observation?: string };
        const functEvs04 = await functionalEvRepositories.insertFunctEv({
          evaluationId,
          iml04: body04.iml04,
          imr04: body04.imr04,
          observation,
        }, evCategory);
        return functEvs04;

      case "functEvs05":
        const body05 = body as { iml05dist: Decimal; imr05dist: Decimal; iml05ang: number; imr05ang: number; observation?: string };
        const functEvs05 = await functionalEvRepositories.insertFunctEv({
          evaluationId,
          iml05dist: body05.iml05dist,
          imr05dist: body05.imr05dist,
          iml05ang: body05.iml05ang,
          imr05ang: body05.imr05ang,
          observation,
        }, evCategory);
        return functEvs05;

      case "functEvs06":
        const body06 = body as { iml06quad: Decimal; imr06quad: Decimal; iml06isqui: Decimal; imr06isqui: Decimal; observation?: string };
        const functEvs06 = await functionalEvRepositories.insertFunctEv({
          evaluationId,
          iml06quad: body06.iml06quad,
          imr06quad: body06.imr06quad,
          iml06isqui: body06.iml06isqui,
          imr06isqui: body06.imr06isqui,
          observation,
        }, evCategory);
        return functEvs06;

      case "functEvs07":
        const body07 = body as { cmj07: number; iml07sh: number; imr07sh: number; observation?: string };
        const functEvs07 = await functionalEvRepositories.insertFunctEv({
          evaluationId,
          cmj07: body07.cmj07,
          iml07sh: body07.iml07sh,
          imr07sh: body07.imr07sh,
          observation,
        }, evCategory);
        return functEvs07;

      case "functEvs08":
        const body08 = body as { cmj08: Decimal; sj08: Decimal; iml08cmjuni: Decimal; imr08cmjuni: Decimal; observation?: string };
        const functEvs08 = await functionalEvRepositories.insertFunctEv({
          evaluationId,
          cmj08: body08.cmj08,
          sj08: body08.sj08,
          iml08cmjuni: body08.iml08cmjuni,
          imr08cmjuni: body08.imr08cmjuni,
          observation,
        }, evCategory);
        return functEvs08;

    default:
      break;
  }
}

export const functionalEvsServices = {
  mountFunctEv
};