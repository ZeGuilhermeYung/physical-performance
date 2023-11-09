export function registerEvaluation (patientId, body) {
  const promise = axios.post(`${urlAPI}/patients/${patientId}/evaluations`, body);
  return promise;
}

export function getPatientEvaluations(patientId) {
  const promise = axios.get(`${urlAPI}/patients/${patientId}/evaluations`);
  return promise;
}