import db from "../database/db.js";

async function insertPatient
  (name, email, phone, photo, gender, birthdate,
    domSm, domIm, sports, weight, height) {
  const query = `INSERT INTO patients
    (name, email, phone, photo, gender, birthdate,
      "domSm", "domIm", sports, weight, height)
    VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11 );`;
  return db.query(query,
    [name, email, phone, photo, gender, birthdate,
      domSm, domIm, sports, weight, height]);
}

async function getPatients() {
  const query = `SELECT id, name, gender, birthdate FROM patients;`;
  const result = await db.query(query);
  return result.rows;
}

async function findPatients(name) {
  const query = `SELECT id, name, gender, birthdate FROM patients
    WHERE unaccent (LOWER(name)) ~* unaccent (LOWER($1));`;
  const result = await db.query(query, [name]);
  return result.rows;
}

async function getPatientByName(name) {
  const query = `SELECT name FROM patients WHERE name = $1;`;
  const result = await db.query(query, [name]);
  return result.rows[0];
}

async function getPatient(id) {
  const query = `SELECT * FROM patients WHERE id = $1;`;
  const result = await db.query(query, [id]);
  return result.rows[0];
}

export const patientsRepositories = {
  insertPatient,
  getPatients,
  findPatients,
  getPatientByName,
  getPatient
}