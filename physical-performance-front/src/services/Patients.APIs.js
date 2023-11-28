import axios from "axios";

const urlAPI = process.env.REACT_APP_API_URL;

export function registerPatient (body) {
  const promise = axios.post(`${urlAPI}/patients`, body);
  return promise;
};

export function getPatients (name) {
  const promise = axios.get(`${urlAPI}/patients`, {
    params: { name },
  });
  return promise;
};

export function getPatientById(patientId) {
  const promise = axios.get(`${urlAPI}/patients/${patientId}`);
  return promise;
};