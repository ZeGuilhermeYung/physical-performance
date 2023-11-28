import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { getPatients } from "../../../services/Patients.APIs";
import Patient from "./Patient";
import TitleContext from "../../../context/TitleContext";

export default function Patients () {
  const { setTitle } = useContext(TitleContext);
  const location = useLocation();
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const name = params.get('name');

    setTitle("Alunos");

    getPatients(name)
      .then(res => {
        setPatients(res.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [location.search]);
  console.log(patients)
  return (
    <Article>
      {patients.map((patient, index) =>
        <Patient
          key={index}
          id={patient.id}
          name={patient.name}
          gender={patient.gender}
          age={patient.age}
          lastEvDate={patient.lastEvDate} />)}
    </Article>
  );
}

const Article = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;`