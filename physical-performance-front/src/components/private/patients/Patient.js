import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Patient ( {id, name, gender, age} ) {
  const navigate = useNavigate();

  function navigateToPatient () {
    navigate(`/patients/${id}/evaluations`);
  }

  return (
    <PatientCard onClick={() => navigateToPatient()}>
      <h4>{name}</h4>
      <h4>{gender}</h4>
      <h4>{age}</h4>  
    </PatientCard>
  );
}

const PatientCard = styled.button`
  width: 250px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;`