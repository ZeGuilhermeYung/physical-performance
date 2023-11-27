import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Patient ( {id, name, gender, age, lastEvDate} ) {
  const navigate = useNavigate();

  function navigateToPatient () {
    navigate(`/patients/${id}/evaluations`);
  }

  return (
    <PatientCard onClick={() => navigateToPatient()}>
      <NameContainer days={lastEvDate.days} >
        <h3>{name}</h3>
        <h3>última avaliação</h3>
      </NameContainer>
      <figure>
        <GenderContainer>
          <h3>Sexo: {gender === "M" ? "Masculino" : "Feminino"}</h3>
        </GenderContainer>
        <h3>Idade: {age} anos</h3>
        <TimeSince>
          <h3>{lastEvDate.formattedMessage}</h3>
        </TimeSince>
      </figure> 
    </PatientCard>
  );
}
const PatientCard = styled.button`
  width: 650px;
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
    padding: 0 30px 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }`

const GenderContainer = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;`

const NameContainer = styled.section`
  width: 100%;
  height: 45px;
  background-color: ${props => (
    (props.days >= 28 && props.days < 42) ? "#EDAD46"
    : (props.days >= 42) ? "#D63738"
    : "#4C956A"
  )};
  border-radius: 7px 7px 0 0;
  padding: 0 80px 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;`

const TimeSince = styled.div`
  width: 230px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;`
  



