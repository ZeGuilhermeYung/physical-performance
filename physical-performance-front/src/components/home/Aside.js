import styled from "styled-components";
import { useEffect, useState } from "react";
import { getPatientById } from "../../services/Patients.APIs";
import { useParams } from "react-router-dom";
import logo from "../../assets/img/logo-pro-sport.png";

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
      <LogoImg src={logo} alt="Logo Pro Sport" />
      <AvatarImg src={patient.photo} alt="" />
      <PatientInfo>
        <PatientName>
          <h3>{patient.name}</h3>
        </PatientName>
        <ul>
          <li>
            <h4>Sexo:</h4>
            <h4>{patient.gender === "M" ? "Masculino" : "Feminino"}</h4>
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
          <li>
            <h4>Hist. Lesões:</h4>
            <h4>{patient.injurysHistory}</h4>
          </li>
          <li>
            <h4>Hist. Doenças:</h4>
            <h4>{patient.diseaseHistory}</h4>
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
  width: 380px;
  height: 100%;
  background-color: #2C405E;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
  padding: 20px 0 20px 0;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;`

const LogoImg = styled.img`
  height: 65px;`
  
const AvatarImg = styled.img`
  width: 175px;
  height: 175px;
  border-radius: 50%;
  margin: 35px 0 35px 0;
  object-fit: cover;

  h3 {
    font-size: 32px;
    font-weight: 500;
    text-align: center;
  }`

const PatientInfo = styled.article`
  width: 300px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  ul {
    width: 100%;
    max-height: 100%;
    padding: 20px;
    border: 1px solid #526A89;
    border-radius: 0 0 15px 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
  }
  li {
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #526A89;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }`
  const PatientName = styled.div`
    width: 330px;
    max-height: 100px;
    padding: 5px 0 5px 0;
    border-radius: 7px 7px 15px 15px;
    background-color: #526A89;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;`