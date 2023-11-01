async function insertPatients
  (name, email, phone, gender, birthdate,
    domSm, domIm, sports, weigth, height) {
  const query = `INSERT INTO patients
    (name, email, phone, gender, birthdate,
      "domSm", "domIm", sports, weigth, height)
    VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11 );`;
  return db.query(query,
    [name, email, phone, gender, birthdate,
      domSm, domIm, sports, weigth, height]);
}

async function getPatients() {
  const query = `SELECT (name, gender, birthdate) FROM patients;`;
  const result = await db.query(query);
  return result.rows;
}

async function getPatient(id) {
  const query = `SELECT * FROM patients WHERE id = $1;`;
  const result = await db.query(query, [id]);
  return result.rows;
}

export const patientsRepositories = {
  insertPatients,
  getPatients,
  getPatient
}