import styled from "styled-components";
import { useEffect, useState } from "react";
import { getPatientById } from "../../services/Patients.APIs";
import { useParams } from "react-router-dom";

export default function Aside () {
  const [patient, setPatient] = useState({});
  const { patientId } = useParams();

  useEffect(() => {
    if (patientId) {
      getPatientById(patientId)
      .then(response => {
        setPatient(response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
    }
  }, [patientId]);
  
  return patientId ? (
    <PatientMenu>
      <img src={patient.photo} alt="" />
      <PatientInfo>
        <PatientName>
          <h3>{patient.name}</h3>
        </PatientName>
        <ul>
          <li>
            <h4>Sexo:</h4>
            <h4>{patient.gender}</h4>
          </li>
          <li>
            <h4>Idade:</h4>
            <h4>{patient.age}</h4>
          </li>
          <li>
            <h4>Data de nascimento:</h4>
            <h4>{patient.birthdate}</h4>
          </li>
          <li>
            <h4>MDS:</h4>
            <h4>{patient.domSm}</h4>
          </li>
          <li>
            <h4>MDI:</h4>
            <h4>{patient.domIm}</h4>
          </li>
          <li>
            <h4>Altura:</h4>
            <h4>{(patient.height/100).toFixed(2).replace('.', ',')}m</h4>
          </li>
          <li>
            <h4>Peso:</h4>
             <h4>{patient.weight}Kg</h4>
          </li>
          <li>
            <h4>Esportes:</h4>
            <h4>{patient.sports}</h4>
          </li>
        </ul> 
      </PatientInfo>
    </PatientMenu>
  )
  : 
  <PatientMenu>
    <h2>Em breve, informações aqui</h2>
  </PatientMenu>;
}

const PatientMenu = styled.aside`
  width: 450px;
  height: 100%;
  background-color: #2C405E;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
  }`

const PatientInfo = styled.article`
  width: 250px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  ul {
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }
  li {
    width: 100%;
    height: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }
  h3 {
    //font-family: 'Bebas Neue';
    font-size: 32px;
    font-weight: 500;
    text-align: center;
  }`

  const PatientName = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    margin-bottom: 50px;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;`