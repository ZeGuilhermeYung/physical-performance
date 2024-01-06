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

  function functEvType(evArrayPosition) {
    switch (evArrayPosition) {
      case 0: return "Elevação de perna estendida";
      case 1: return "Flexibilidade dos Isquiotibiais";
      case 2: return "Teste de Thomas";
      case 3: return "Rigidez de Rotadores de Quadril";
      case 4: return "Lunge Test - ADM Dorsiflexão";
      case 5: return "Força Isométrica";
      case 6: return "Saltos horizontais";
      case 7: return "Saltos verticais";
    
      default:
        break;
    }
  };

  const renderEvaluationCards = (evType, cards, arrayPosition) => {
    return (
      <>
        {cards.map((ev, index) => (
          ev ? (
            <EvTypeCard
              key={index}
              id={ev.id}
              evaluationId={ev.evaluationId}
              functEv={functEvType(arrayPosition)}
              iml01={ev.iml01}
              imr01={ev.imr01}
              iml02={ev.iml02}
              imr02={ev.imr02}
              iml03={ev.iml03}
              imr03={ev.imr03}
              iml04={ev.iml04}
              imr04={ev.imr04}
              iml05dist={ev.iml05dist}
              imr05dist={ev.imr05dist}
              iml05ang={ev.iml05ang}
              imr05ang={ev.imr05ang}
              iml06quad={ev.iml06quad}
              imr06quad={ev.imr06quad}
              iml06isqui={ev.iml06isqui}
              imr06isqui={ev.imr06isqui}
              cmj07={ev.cmj07}
              iml07sh={ev.iml07sh}
              imr07sh={ev.imr07sh}
              cmj08={ev.cmj08}
              sj08={ev.sj08}
              iml08cmjuni={ev.iml08cmjuni}
              imr08cmjuni={ev.imr08cmjuni}
              observation={ev.observation} /> )
              : (<EvTypeCard
                  key={index}
                  functEv={functEvType(arrayPosition)} />)))}
      </>
    );
  };

  return (
    <>
      {evaluation.length > 0 && evType === "functional" ?
        <EvaluationContainer>
          <TwoCardsColumn>
            {renderEvaluationCards(evType, evaluation.slice(0, 1), 0)}
            {renderEvaluationCards(evType, evaluation.slice(2, 3), 2)}
          </TwoCardsColumn>
          <TwoCardsColumn>   
            {renderEvaluationCards(evType, evaluation.slice(1, 2), 1)}
            <IsolateCard>
              {renderEvaluationCards(evType, evaluation.slice(5, 6), 5)}
            </IsolateCard>
          </TwoCardsColumn>
          <TwoCardsColumn>
            {renderEvaluationCards(evType, evaluation.slice(3, 4), 3)}
            {renderEvaluationCards(evType, evaluation.slice(6, 7), 6)}
          </TwoCardsColumn>
          <TwoCardsColumn>
            {renderEvaluationCards(evType, evaluation.slice(4, 5), 4)}
            {renderEvaluationCards(evType, evaluation.slice(7, 8), 7)}
          </TwoCardsColumn>
        </EvaluationContainer>
        : null}
        {evaluation.length > 0 && evType === "physical" ?
          <EvaluationContainer>
            {evaluation.map((physicalEv, index) =>
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
                      index={index} />)}
          </EvaluationContainer>
          : null}
    </>
  );
}

const EvaluationContainer = styled.div`
  width: 100%;
  padding: 0 80px 0 80px;
  //margin-bottom: 20px;
  display: flex;
  //grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  //grid-auto-rows: 800px;
  //gap: 10px;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  box-sizing: border-box;`

const TwoCardsColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;`

const IsolateCard = styled.div`
  margin-top: 60px;`
  //flex-direction: column;
  //align-items: flex-start;
  //justify-content: space-between;`