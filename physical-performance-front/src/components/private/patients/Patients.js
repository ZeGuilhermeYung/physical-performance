import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { getPatients } from "../../../services/Patients.APIs";
import Patient from "./Patient";
import TitleContext from "../../../context/TitleContext";

export default function Patients () {
  const { setTitle } = useContext(TitleContext);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    setTitle("Alunos");
    getPatients()
    .then(response => {
			setPatients(response.data);
		})
    .catch((error) => {
      alert(error.message);
    });
  }, [])

  return (
    <Article>
      {patients.map((patient, index) =>
        <Patient
          key={index}
          id={patient.id}
          name={patient.name}
          gender={patient.gender}
          age={patient.age} />)}
    </Article>
  );
}

const Article = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;`