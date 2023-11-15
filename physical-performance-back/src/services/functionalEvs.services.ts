import { CreateFunctionalEv } from "../protocols/functionalEvs.protocols";
import functionalEvRepositories from "../repositories/functionalEvs.repositories";

async function mountFunctEv(body: CreateFunctionalEv) {
  const { type, observation } = body;

  switch (type) {
    case "functEvs01":
      await functionalEvRepositories.insertFunctEv({
        type,
        iml01: body.iml01,
        imr01: body.imr01,
        observation,
      });
      break;

    case "functEvs02":
      await functionalEvRepositories.insertFunctEv({
        type,
        iml02: body.iml02,
        imr02: body.imr02,
        observation,
      });
      break;

    case "functEvs03":
      await functionalEvRepositories.insertFunctEv({
        type,
        iml03: body.iml03,
        imr03: body.imr03,
        observation,
      });
      break;

    case "functEvs04":
      await functionalEvRepositories.insertFunctEv({
        type,
        iml04: body.iml04,
        imr04: body.imr04,
        observation,
      });
      break;

    case "functEvs05":
      await functionalEvRepositories.insertFunctEv({
        type,
        iml05dist: body.iml05dist,
        imr05dist: body.imr05dist,
        iml05ang: body.iml05ang,
        imr05ang: body.imr05ang,
        observation,
      });
      break;

    case "functEvs06":
      await functionalEvRepositories.insertFunctEv({
        type,
        iml06quad: body.iml06quad,
        imr06quad: body.imr06quad,
        iml06isqui: body.iml06isqui,
        imr06isqui: body.imr06isqui,
        observation,
      });
      break;

    case "functEvs07":
      await functionalEvRepositories.insertFunctEv({
        type,
        cmj07: body.cmj07,
        iml07sh: body.iml07sh,
        imr07sh: body.imr07sh,
        observation,
      });
      break;

    case "functEvs08":
      await functionalEvRepositories.insertFunctEv({
        type,
        cmj08: body.cmj08,
        sj08: body.sj08,
        iml08cmjuni: body.iml08cmjuni,
        imr08cmjuni: body.imr08cmjuni,
        observation,
      });
      break;

    default:
      break;
  }
}

export default mountFunctEv;