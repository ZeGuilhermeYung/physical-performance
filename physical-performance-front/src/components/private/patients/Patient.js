import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Patient ( {id, name, gender, age} ) {
  const navigate = useNavigate();

  function navigateToPatient () {
    navigate(`/patients/${id}/evaluations`);
  }

  return (
    <PatientCard onClick={() => navigateToPatient()}>
      <NameContainer>
        <h3>{name}</h3>
      </NameContainer>
      <figure>
        <h3>sexo: {gender}</h3>
        <h3>idade: {age}</h3> 
      </figure> 
    </PatientCard>
  );
}
const PatientCard = styled.button`
  width: 500px;
  height: 110px;
  border-radius: 7px 7px 15px 15px;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombreamento padrão */
  transition: box-shadow 0.3s, transform 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Sombreamento no hover */
    transform: scale(1.015); /* Ampliação no hover */
    transition-delay: 0.2s;
  }
  figure {
    width: 100%;
    height: 65px;
    background-color: #0E2237;
    border-radius: 0 0 15px 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
  }`

const NameContainer = styled.section`
  width: 100%;
  height: 45px;
  background-color: #4C956A;
  border-radius: 7px 7px 0 0;
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;`
  



