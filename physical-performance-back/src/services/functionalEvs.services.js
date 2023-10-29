import functionalEvRepositories from "../repositories/functionalEvs.repositories";

async function mountFunctEv (body) {
  const { type, patientId, evOrder, observation } = body;

  switch (type) {
    case "functEv01":
      await functionalEvRepositories.insertfunctEv01(
        type, patientId, evOrder, body.iml01, body.imr01, observation);
      break;
    
    case "functEv02":
      await functionalEvRepositories.insertfunctEv02(
        type, patientId, evOrder, body.iml02, body.imr02, observation);
      break;

    case "functEv03":
      await functionalEvRepositories.insertfunctEv03(
        type, patientId, evOrder, body.iml03, body.imr03, observation);
      break;

    case "functEv04":
      await functionalEvRepositories.insertfunctEv04(
        type, patientId, evOrder, body.iml04, body.imr04, observation);
      break;

    case "functEv05":
      await functionalEvRepositories.insertfunctEv05(
        type, patientId, evOrder, body.iml05dist, body.imr05dist, body.iml05ang, body.imr05ang, observation);
      break;

    case "functEv06":
      await functionalEvRepositories.insertfunctEv06(
        type, patientId, evOrder, body.iml06quad, body.imr06quad, body.iml06isqui, body.imr06isqui, observation);
      break;
    
    case "functEv07":
      await functionalEvRepositories.insertfunctEv07(
        type, patientId, evOrder, body.cmj07, body.iml07sh, body.imr07sh, observation);
      break;
      
    case "functEv08":
      await functionalEvRepositories.insertfunctEv08(
        type, patientId, evOrder, body.cmj08, body.sj08, body.iml08cmjuni, body.imr08cmjuni, observation);
      break;

    default:
      break;
  }
}

export default mountFunctEv;