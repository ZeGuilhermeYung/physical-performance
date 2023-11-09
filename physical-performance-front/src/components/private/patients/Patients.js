import { useEffect, useState } from "react";
import { getPatients } from "../../../services/Patients.APIs";
import Patient from "./Patient";

export default function Patients () {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    getPatients()
    .then(response => {
			setPatients(response.data);
		})
    .catch((error) => {
      alert(error.message);
    });
  }, [])

  return (
    <article>
      {patients.map((patient, index) =>
        <Patient
          key={index}
          id={patient.id}
          name={patient.name}
          gender={patient.gender}
          age={patient.age} />)}
    </article>
  );
}