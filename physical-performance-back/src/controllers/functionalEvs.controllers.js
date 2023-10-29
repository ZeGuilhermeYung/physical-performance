import mountFunctEv from "../services/functionalEvs.services";

async function createFunctEv (req, res) {
  const body = req.body;

  try {
      await mountFunctEv(body);

      return res.sendStatus(201);
  } catch (error) {
      return res.status(500).send(error);
  };
};

export default createFunctEv;