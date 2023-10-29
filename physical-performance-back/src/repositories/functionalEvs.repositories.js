import db from "../database/db.js";

async function insertfunctEv01 (type, patientId, evOrder, iml01, imr01, observation) {
  const query = `INSERT INTO "functEv01"
    (type, "patientId", "evOrder", iml01, imr01, observation)
    VALUES ( $1, $2, $3, $4, $5, $6 );`;
  return db.query(query, [type, patientId, evOrder, iml01, imr01, observation]);
}

async function insertfunctEv02 (type, patientId, evOrder, iml02, imr02, observation) {
  const query = `INSERT INTO "functEv02"
    (type, "patientId", "evOrder", iml02, imr02, observation)
    VALUES ( $1, $2, $3, $4, $5, $6 );`;
  return db.query(query, [type, patientId, evOrder, iml02, imr02, observation]);
}

async function insertfunctEv03 (type, patientId, evOrder, iml03, imr03, observation) {
  const query = `INSERT INTO "functEv03"
    (type, "patientId", "evOrder", iml03, imr03, observation)
    VALUES ( $1, $2, $3, $4, $5, $6 );`;
  return db.query(query, [type, patientId, evOrder, iml03, imr03, observation]);
}

async function insertfunctEv04 (type, patientId, evOrder, iml04, imr04, observation) {
  const query = `INSERT INTO "functEv04"
    (type, "patientId", "evOrder", iml04, imr04, observation)
    VALUES ( $1, $2, $3, $4, $5, $6 );`;
  return db.query(query, [type, patientId, evOrder, iml04, imr04, observation]);
}

async function insertfunctEv05 (type, patientId, evOrder, iml05dist, imr05dist, iml05ang, imr05ang, observation) {
  const query = `INSERT INTO "functEv05"
    (type, "patientId", "evOrder", iml05dist, imr05dist, iml05ang, imr05ang, observation)
    VALUES ( $1, $2, $3, $4, $5, $6, $7, $8 );`;
  return db.query(query, [type, patientId, evOrder, iml05dist, imr05dist, iml05ang, imr05ang, observation]);
}

async function insertfunctEv06 (type, patientId, evOrder, iml06quad, imr06quad, iml06isqui, imr06isqui, observation) {
  const query = `INSERT INTO "functEv06"
    (type, "patientId", "evOrder", iml06quad, imr06quad, iml06isqui, imr06isqui, observation)
    VALUES ( $1, $2, $3, $4, $5, $6, $7, $8 );`;
  return db.query(query, [type, patientId, evOrder, iml06quad, imr06quad, iml06isqui, imr06isqui, observation]);
}

async function insertfunctEv07 (type, patientId, evOrder, cmj07, iml07sh, imr07sh, observation) {
  const query = `INSERT INTO "functEv07"
    (type, "patientId", "evOrder", cmj07, iml07sh, imr07sh, observation)
    VALUES ( $1, $2, $3, $4, $5, $6, $7 );`;
  return db.query(query, [type, patientId, evOrder, cmj07, iml07sh, imr07sh, observation]);
}

async function insertfunctEv08 (type, patientId, evOrder, cmj08, sj08, iml08cmjuni, imr08cmjuni, observation) {
  const query = `INSERT INTO "functEv08"
    (type, "patientId", "evOrder", cmj08, sj08, iml08cmjuni, imr08cmjuni, observation)
    VALUES ( $1, $2, $3, $4, $5, $6, $7, $8 );`;
  return db.query(query, [type, patientId, evOrder, cmj08, sj08, iml08cmjuni, imr08cmjuni, observation]);
}

const functionalEvRepositories = {
  insertfunctEv01,
  insertfunctEv02,
  insertfunctEv03,
  insertfunctEv04,
  insertfunctEv05,
  insertfunctEv06,
  insertfunctEv07,
  insertfunctEv08
}

export default functionalEvRepositories;