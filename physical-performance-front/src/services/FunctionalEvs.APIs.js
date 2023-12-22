import axios from "axios";

const urlAPI = process.env.REACT_APP_API_URL;

export function getPatientFunctionalEv(patiendtId, evType, id) {
  const promise = axios.get(`${urlAPI}/patients/${patientId}/evaluations`);
  return promise;
};