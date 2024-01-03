import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import TitleContext from "../../../context/TitleContext";
import { getEvaluation } from "../../../services/Evaluations.APIs";
import EvTypeCard from "./EvTypeCard";

export default function Evaluation () {
  const { patientId, evType, id, finishedAt } = useParams();
  const [evaluation, setEvaluation] = useState([]);
  const { setTitle } = useContext(TitleContext);

  function formatDateForTitle(dateString) {
    const [day, month, year] = dateString.split('-');
    const isoFormattedDate = `${year}/${month}/${day}`;
    return isoFormattedDate;
  }

  useEffect(() => {
    setTitle(`Avaliação ${evType === "functional" ? "funcional" : "física"} - ${formatDateForTitle(finishedAt)}`);
    getEvaluation(evType, id)
    .then(res => {
      if (res.data) {
        setEvaluation(res.data);
      } //else setEvaluation([]);
		})
    .catch((error) => {
      alert(error.message);
    });
  }, [id]);

  return (
    <>
      <EvaluationContainer>
        {evaluation.length > 0 && evType === "functional" ?
          evaluation.map((functEv, index) =>
            functEv ?
              <EvTypeCard
                key={index}
                index={index}
                id={functEv.id}
                evaluationId={functEv.evaluationId}
                iml01={functEv.iml01}
                imr01={functEv.imr01}
                iml02={functEv.iml02}
                imr02={functEv.imr02}
                iml03={functEv.iml03}
                imr03={functEv.imr03}
                iml04={functEv.iml04}
                imr04={functEv.imr04}
                iml05dist={functEv.iml05dist}
                imr05dist={functEv.imr05dist}
                iml05ang={functEv.iml05ang}
                imr05ang={functEv.imr05ang}
                iml06quad={functEv.iml06quad}
                imr06quad={functEv.imr06quad}
                iml06isqui={functEv.iml06isqui}
                imr06isqui={functEv.imr06isqui}
                cmj07={functEv.cmj07}
                iml07sh={functEv.iml07sh}
                imr07sh={functEv.imr07sh}
                cmj08={functEv.cmj08}
                sj08={functEv.sj08}
                iml08cmjuni={functEv.iml08cmjuni}
                imr08cmjuni={functEv.imr08cmjuni}
                observation={functEv.observation} />
                : <EvTypeCard
                    key={index}
                    index={index} />)
          : null}
      </EvaluationContainer>
      <EvaluationContainer>
        {evaluation.length > 0 && evType === "physical" ?
          evaluation.map((physicalEv, index) =>
            physicalEv ?
              <EvTypeCard
                key={index}
                index={index}
                id={physicalEv.id}
                evType={evType}
                evaluationId={physicalEv.evaluationId}
                iml01={physicalEv.iml01}
                imr01={physicalEv.imr01}
                iml02={physicalEv.iml02}
                imr02={physicalEv.imr02}
                iml03={physicalEv.iml03}
                imr03={physicalEv.imr03}
                iml04={physicalEv.iml04}
                imr04={physicalEv.imr04}
                iml05dist={physicalEv.iml05dist}
                imr05dist={physicalEv.imr05dist}
                iml05ang={physicalEv.iml05ang}
                imr05ang={physicalEv.imr05ang}
                iml06quad={physicalEv.iml06quad}
                imr06quad={physicalEv.imr06quad}
                iml06isqui={physicalEv.iml06isqui}
                imr06isqui={physicalEv.imr06isqui}
                cmj07={physicalEv.cmj07}
                iml07sh={physicalEv.iml07sh}
                imr07sh={physicalEv.imr07sh}
                cmj08={physicalEv.cmj08}
                sj08={physicalEv.sj08}
                iml08cmjuni={physicalEv.iml08cmjuni}
                imr08cmjuni={physicalEv.imr08cmjuni}
                observation={physicalEv.observation} />
                : <EvTypeCard
                    key={index}
                    index={index} />)
            : null}
      </EvaluationContainer>
    </>
  );
}

const EvaluationContainer = styled.div`
  width: 100%;
  padding: 40px 80px 0 80px;
  //margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;`