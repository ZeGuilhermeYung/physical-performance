import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getPatientById } from "../../../services/Patients.APIs";
import { useEffect, useState, useContext } from "react";
import TitleContext from "../../../context/TitleContext";
import EvaluationInfo from "./EvaluationInfo";

export default function Evaluations () {
  const { setTitle } = useContext(TitleContext);
  const { patientId } = useParams();
  const [evaluations, setEvaluations] = useState([]);

  useEffect(() => {
    setTitle("Avaliações");
    getPatientById(patientId)
    .then(res => {
      if (res.data.evaluations) {
        setEvaluations(res.data.evaluations);
      } else setEvaluations([]);
		})
    .catch((error) => {
      alert(error.message);
    });
  }, [patientId]);
 
  return (
    <>
      <EvaluationType>
        <h1>Funcionais</h1>
      </EvaluationType>
      <EvaluationsContainer>
      {evaluations.length > 0 ?
        evaluations.filter(evaluation => 
          evaluation.evType === "functional")
          .map((evaluation, index) =>
            <EvaluationInfo
            key={index}
            id={evaluation.id}
            patientId={evaluation.patientId}
            evType={evaluation.evType}
            finishedAt={evaluation.finishedAt}
            finishedAtTime={evaluation.finishedAtTime}
            duration={evaluation.duration} />)
          : <h2>Nenhuma avaliação realizada</h2>}
      </EvaluationsContainer>
      <EvaluationType>
        <h1>Físicas</h1>
      </EvaluationType>
      <EvaluationsContainer>
        {evaluations.length > 0 ?
          evaluations.filter(evaluation => 
            evaluation.evType === "physical")
            .map((evaluation, index) =>
              <EvaluationInfo
              key={index}
              id={evaluation.id}
              patientId={evaluation.patientId}
              evType={evaluation.evType}
              finishedAt={evaluation.finishedAt}
              finishedAtTime={evaluation.finishedAtTime}
              duration={evaluation.duration} />)
            : <h2>Nenhuma avaliação realizada</h2>} 
      </EvaluationsContainer>
    </>
  );
}

const EvaluationsContainer = styled.div`
  width: 100%;
  padding: 40px 80px 0 80px;
  //margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;`

const EvaluationType = styled.div`
  width: 90%;
  height: 100px;
  border-bottom: 1px solid #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  h1 {
    font-size: 35px;
    font-weight: 400;
    text-align: center;
  }`