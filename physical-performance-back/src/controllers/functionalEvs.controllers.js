import status from "http-status";
import mountFunctEv from "../services/functionalEvs.services.js";

async function postFunctEv (req, res) {
  const body = req.body;
  const { patientId, evOrder } = req.params;

  await mountFunctEv(body, patientId, evOrder);

  return res.sendStatus(status.CREATED);
};

export default postFunctEv;