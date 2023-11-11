import { conflictError, notFound, unprocessableEntity } from "../errors/errors";
import functionalEvRepositories from "../repositories/functionalEvs.repositories";
import { patientsRepositories } from "../repositories/patients.repositories";

interface Body {
  type: string;
  observation?: string;
  iml01?: number;
  imr01?: number;
  iml02?: number;
  imr02?: number;
  iml03?: string;
  imr03?: string;
  iml04?: number;
  imr04?: number;
  iml05dist?: number;
  imr05dist?: number;
  iml05ang?: number;
  imr05ang?: number;
  iml06quad?: number;
  imr06quad?: number;
  iml06isqui?: number;
  imr06isqui?: number;
  cmj07?: number;
  iml07sh?: number;
  imr07sh?: number;
  cmj08?: number;
  sj08?: number;
  iml08cmjuni?: number;
  imr08cmjuni?: number;
}

async function mountFunctEv(body: Body, patientId: string, evOrder: string) {
  const { type, observation } = body;

  if (isNaN(parseInt(patientId)) || isNaN(parseInt(evOrder))) {
    throw unprocessableEntity("Valores de id ou ordem da avaliação precisam ser numéricos!");
  }

  const patientExists = await patientsRepositories.getPatient(parseInt(patientId));
  const evOrderUnique = await functionalEvRepositories.findFunctEv(type, parseInt(patientId), parseInt(evOrder));

  if (!patientExists) {
    throw notFound("O paciente não existe no banco de dados!");
  }
  if (evOrderUnique) {
    throw conflictError("Já existe esta avaliação no banco!");
  }

  switch (type) {
    case "functEvs01":
      await functionalEvRepositories.insertFunctEv({
        type,
        patientId: parseInt(patientId),
        evOrder: parseInt(evOrder),
        iml01: body.iml01,
        imr01: body.imr01,
        observation,
      });
      break;

    case "functEvs02":
      await functionalEvRepositories.insertFunctEv({
        type,
        patientId: parseInt(patientId),
        evOrder: parseInt(evOrder),
        iml02: body.iml02,
        imr02: body.imr02,
        observation,
      });
      break;

    case "functEvs03":
      await functionalEvRepositories.insertFunctEv({
        type,
        patientId: parseInt(patientId),
        evOrder: parseInt(evOrder),
        iml03: body.iml03,
        imr03: body.imr03,
        observation,
      });
      break;

    case "functEvs04":
      await functionalEvRepositories.insertFunctEv({
        type,
        patientId: parseInt(patientId),
        evOrder: parseInt(evOrder),
        iml04: body.iml04,
        imr04: body.imr04,
        observation,
      });
      break;

    case "functEvs05":
      await functionalEvRepositories.insertFunctEv({
        type,
        patientId: parseInt(patientId),
        evOrder: parseInt(evOrder),
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
        patientId: parseInt(patientId),
        evOrder: parseInt(evOrder),
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
        patientId: parseInt(patientId),
        evOrder: parseInt(evOrder),
        cmj07: body.cmj07,
        iml07sh: body.iml07sh,
        imr07sh: body.imr07sh,
        observation,
      });
      break;

    case "functEvs08":
      await functionalEvRepositories.insertFunctEv({
        type,
        patientId: parseInt(patientId),
        evOrder: parseInt(evOrder),
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