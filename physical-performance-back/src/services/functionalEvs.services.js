import { conflictError, notFound, unprocessableEntity } from "../errors/errors.js";
import functionalEvRepositories from "../repositories/functionalEvs.repositories.js";
import { patientsRepositories } from "../repositories/patients.repositories.js";

async function mountFunctEv (body, patientId, evOrder) {
  const { type, observation } = body;
  
  if (isNaN(patientId) || isNaN(evOrder))
    throw unprocessableEntity("valores de id, ou a ordem da avalição precisam ser numéricos!");

  const patientExists = await patientsRepositories.getPatient(patientId);
  const evOrderUnique = await functionalEvRepositories.findFunctEv(type, patientId, evOrder);
  
  if (!patientExists)
    throw notFound("O paciente não existe no banco de dados!");
  if (evOrderUnique)
    throw conflictError("Já existe esta avaliação no banco!");

  switch (type) {
    case "functEvs01":
      await functionalEvRepositories.insertfunctEv01(
        type, patientId, evOrder, body.iml01, body.imr01, observation);
      break;
    
    case "functEvs02":
      await functionalEvRepositories.insertfunctEv02(
        type, patientId, evOrder, body.iml02, body.imr02, observation);
      break;

    case "functEvs03":
      await functionalEvRepositories.insertfunctEv03(
        type, patientId, evOrder, body.iml03, body.imr03, observation);
      break;

    case "functEvs04":
      await functionalEvRepositories.insertfunctEv04(
        type, patientId, evOrder, body.iml04, body.imr04, observation);
      break;

    case "functEvs05":
      await functionalEvRepositories.insertfunctEv05(
        type, patientId, evOrder, body.iml05dist, body.imr05dist, body.iml05ang, body.imr05ang, observation);
      break;

    case "functEvs06":
      await functionalEvRepositories.insertfunctEv06(
        type, patientId, evOrder, body.iml06quad, body.imr06quad, body.iml06isqui, body.imr06isqui, observation);
      break;
    
    case "functEvs07":
      await functionalEvRepositories.insertfunctEv07(
        type, patientId, evOrder, body.cmj07, body.iml07sh, body.imr07sh, observation);
      break;
      
    case "functEvs08":
      await functionalEvRepositories.insertfunctEv08(
        type, patientId, evOrder, body.cmj08, body.sj08, body.iml08cmjuni, body.imr08cmjuni, observation);
      break;

    default:
      break;
  }
}

export default mountFunctEv;