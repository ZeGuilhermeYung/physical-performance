import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { getPatientById } from "../../../services/Patients.APIs";
import { useEffect, useState } from "react";

export default function Evaluations () {
  const navigate = useNavigate();

  

  return (
    <EvaluationCard >
      <h4>dsadas</h4>
      <h4>dasdads</h4>
      <h4>dasdasdas</h4>  
    </EvaluationCard>
  );
}

const EvaluationCard = styled.button`
  width: 250px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;`