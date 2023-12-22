import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import TitleContext from "../../../context/TitleContext";

export default function EvaluationInfo ( {id, patientId, evType, finishedAt, finishedAtTime, duration} ) {
  const navigate = useNavigate();
  const { setTitle } = useContext(TitleContext);

  function navigateToEvaluation () {
    setTitle(`Avaliação ${evType === "functional" ? "funcional" : "física"} - ${finishedAt}`);
    navigate(`/patients/${patientId}/evaluations/${evType}/${id}`);
  }

  return (
    <EvaluationCard onClick={() => navigateToEvaluation()}>
      <NameContainer evsCompleted={duration.formattedMessage}>
        <h3>Avaliação em {finishedAt}</h3>
      </NameContainer>
      <figure isComplete={finishedAtTime} >
        <h3>{finishedAtTime ? `Finalizada às ${finishedAtTime}` : null}</h3>
        <h3>Duração: {duration.formattedMessage}</h3>
      </figure> 
    </EvaluationCard>
  );
}

const EvaluationCard = styled.button`
  width: 280px;
  height: 160px;
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
    height: 115px;
    background-color: #001522;
    border-radius: 0 0 15px 15px;
    padding: 10px 0 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: ${props => (
      (props.isComplete) ? "space-around"
      : "center"
    )};
    align-items: center;
    box-sizing: border-box;
  }`

const NameContainer = styled.section`
  width: 100%;
  height: 45px;
  background-color: ${props => (
    (props.evsCompleted === "Em andamento") ? "#E0BD55"
    : (props.evsCompleted === "Não iniciada") ? "#E14D3F"
    : "#3DA59B"
  )};
  border-radius: 7px 7px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;`