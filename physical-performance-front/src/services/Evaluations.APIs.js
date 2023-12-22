import axios from "axios";

const urlAPI = process.env.REACT_APP_API_URL;

export function registerEvaluation (patientId, body) {
  const promise = axios.post(`${urlAPI}/patients/${patientId}/evaluations`, body);
  return promise;
};

export function getPatientEvaluations(patientId) {
  const promise = axios.get(`${urlAPI}/patients/${patientId}/evaluations`);
  return promise;
};

export function getEvaluation(evType, id) {
  const promise = axios.get(`${urlAPI}/evaluations/${evType}/${id}`);
  return promise;
};