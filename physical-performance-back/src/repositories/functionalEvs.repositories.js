import db from "../database/db.js";

async function insertfunctEv01 (type, patientId, evOrder, iml01, imr01, observation) {
  const query = `INSERT INTO "functEvs01"
    (type, "patientId", "evOrder", iml01, imr01, observation)
    VALUES ( $1, $2, $3, $4, $5, $6 );`;
    console.log(type, patientId, evOrder, iml01, imr01, observation)
  return db.query(query, [type, patientId, evOrder, iml01, imr01, observation]);
}

async function insertfunctEv02 (type, patientId, evOrder, iml02, imr02, observation) {
  const query = `INSERT INTO "functEvs02"
    (type, "patientId", "evOrder", iml02, imr02, observation)
    VALUES ( $1, $2, $3, $4, $5, $6 );`;
  return db.query(query, [type, patientId, evOrder, iml02, imr02, observation]);
}

async function insertfunctEv03 (type, patientId, evOrder, iml03, imr03, observation) {
  const query = `INSERT INTO "functEvs03"
    (type, "patientId", "evOrder", iml03, imr03, observation)
    VALUES ( $1, $2, $3, $4, $5, $6 );`;
  return db.query(query, [type, patientId, evOrder, iml03, imr03, observation]);
}

async function insertfunctEv04 (type, patientId, evOrder, iml04, imr04, observation) {
  const query = `INSERT INTO "functEvs04"
    (type, "patientId", "evOrder", iml04, imr04, observation)
    VALUES ( $1, $2, $3, $4, $5, $6 );`;
  return db.query(query, [type, patientId, evOrder, iml04, imr04, observation]);
}

async function insertfunctEv05 (type, patientId, evOrder, iml05dist, imr05dist, iml05ang, imr05ang, observation) {
  const query = `INSERT INTO "functEvs05"
    (type, "patientId", "evOrder", iml05dist, imr05dist, iml05ang, imr05ang, observation)
    VALUES ( $1, $2, $3, $4, $5, $6, $7, $8 );`;
  return db.query(query, [type, patientId, evOrder, iml05dist, imr05dist, iml05ang, imr05ang, observation]);
}

async function insertfunctEv06 (type, patientId, evOrder, iml06quad, imr06quad, iml06isqui, imr06isqui, observation) {
  const query = `INSERT INTO "functEvs06"
    (type, "patientId", "evOrder", iml06quad, imr06quad, iml06isqui, imr06isqui, observation)
    VALUES ( $1, $2, $3, $4, $5, $6, $7, $8 );`;
  return db.query(query, [type, patientId, evOrder, iml06quad, imr06quad, iml06isqui, imr06isqui, observation]);
}

async function insertfunctEv07 (type, patientId, evOrder, cmj07, iml07sh, imr07sh, observation) {
  const query = `INSERT INTO "functEvs07"
    (type, "patientId", "evOrder", cmj07, iml07sh, imr07sh, observation)
    VALUES ( $1, $2, $3, $4, $5, $6, $7 );`;
  return db.query(query, [type, patientId, evOrder, cmj07, iml07sh, imr07sh, observation]);
}

async function insertfunctEv08 (type, patientId, evOrder, cmj08, sj08, iml08cmjuni, imr08cmjuni, observation) {
  const query = `INSERT INTO "functEvs08"
    (type, "patientId", "evOrder", cmj08, sj08, iml08cmjuni, imr08cmjuni, observation)
    VALUES ( $1, $2, $3, $4, $5, $6, $7, $8 );`;
  return db.query(query, [type, patientId, evOrder, cmj08, sj08, iml08cmjuni, imr08cmjuni, observation]);
}

async function findFunctEv (type, patientId, evOrder) {
  const query = `
    SELECT * FROM "${type}" WHERE "patientId" = $1 AND "evOrder" = $2;`;
  const result = await db.query(query, [patientId, evOrder]);
  return result.rows[0];
}

const functionalEvRepositories = {
  insertfunctEv01,
  insertfunctEv02,
  insertfunctEv03,
  insertfunctEv04,
  insertfunctEv05,
  insertfunctEv06,
  insertfunctEv07,
  insertfunctEv08,
  findFunctEv
}

export default functionalEvRepositories;