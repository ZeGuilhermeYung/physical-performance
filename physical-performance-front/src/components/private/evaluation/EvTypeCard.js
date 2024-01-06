import styled from "styled-components";

export default function EvTypeCard ( {
  id,
  evaluationId,
  functEv,
  iml01,
  imr01,
  iml02,
  imr02,
  iml03,
  imr03,
  iml04,
  imr04,
  iml05dist,
  imr05dist,
  iml05ang,
  imr05ang,
  iml06quad,
  imr06quad,
  iml06isqui,
  imr06isqui,
  cmj07,
  iml07sh,
  imr07sh,
  cmj08,
  sj08,
  iml08cmjuni,
  imr08cmjuni,
  observation} ) {

  function functEv04Message(degrees) {
    if (degrees < 30) return ["Alta rigidez e baixa mobilidade", "Treino de mobilidade"];
    if (degrees <= 40 && degrees >= 30) return ["Normal", "Normal"];
    if (degrees > 40) return ["Baixa rigidez e alta mobilidade", "Ativação de CPL"];
  };

  function functEv05Message(degrees) {
    if (degrees < 35) return "Hipomobilidade";
    if (degrees <= 45 && degrees >= 35) return "Mobilidade normal";
    if (degrees > 45) return "Hipermobilidade";
  };

  function membersComparison(imlValue, imrValue) {
    if (imlValue > imrValue) return 100 - Math.round((imrValue/imlValue)*100)
    else if (imlValue < imrValue) return 100 - Math.round((imlValue/imrValue)*100)
    else return 0;
  }

  return (
    <EvaluationCard>
      <NameContainer>
        <h3>{functEv}</h3>
        <TableLine borderPosition="top">
          <LeftTableValue><h3>MIE</h3></LeftTableValue>
          <RightTableValue><h3>MID</h3></RightTableValue>
        </TableLine>
      </NameContainer>
      <figure>
        {iml01 || imr01 ? 
          <TableLine>
            <LeftTableValue color={imr01}><h3 color={iml01}>{iml01}</h3></LeftTableValue>
            <RightTableValue color={imr01}><h3>{imr01}</h3></RightTableValue>
          </TableLine>
          : null}
        {iml02 || imr02 ? 
          <TableLine>
            <LeftTableValue color02={imr02}><h3>{iml02}°</h3></LeftTableValue>
            <RightTableValue color02={imr02}><h3>{imr02}°</h3></RightTableValue>
          </TableLine>
          : null}
        {iml03 || imr03 ? 
          <TableLine>
            <LeftTableValue color={iml03}><h3>{iml03}</h3></LeftTableValue>
            <RightTableValue color={imr03}><h3>{imr03}</h3></RightTableValue>
          </TableLine>
          : null}
        {iml04 || imr04 ? 
          <>
            <TableLine>
              <LeftTableValue color04={iml04}><h3>{iml04}°</h3></LeftTableValue>
              <RightTableValue color04={imr04}><h3>{imr04}°</h3></RightTableValue>
            </TableLine>
            <TableLine borderPosition="bottom" heigthSize="message">
              <LeftTableValue><h3>{(functEv04Message(iml04))[0]}</h3></LeftTableValue>
              <RightTableValue><h3>{(functEv04Message(imr04))[0]}</h3></RightTableValue>
            </TableLine>
            <TableLine heigthSize="message">
              <LeftTableValue><h3>{(functEv04Message(iml04))[1]}</h3></LeftTableValue>
              <RightTableValue><h3>{(functEv04Message(imr04))[1]}</h3></RightTableValue>
            </TableLine>
          </>
          : null}
        {iml05dist || imr05dist ? 
          <TableLine>
            <LeftTableValue><h3>{iml05dist}cm</h3></LeftTableValue>
            <RightTableValue><h3>{imr05dist}cm</h3></RightTableValue>
          </TableLine>
          : null}
        {iml05ang || imr05ang ? 
          <>
            <TableLine>
              <LeftTableValue color05={iml05ang}><h3>{iml05ang}°</h3></LeftTableValue>
              <RightTableValue color05={imr05ang}><h3>{imr05ang}°</h3></RightTableValue>
            </TableLine>
            <TableLine heigthSize="message">
              <LeftTableValue><h3>{functEv05Message(iml05ang)}</h3></LeftTableValue>
              <RightTableValue><h3>{functEv05Message(imr05ang)}</h3></RightTableValue>
            </TableLine>
          </>
          : null}
        {iml06quad || imr06quad ?
          <>
            <TableLine>
              <LeftTableValue color="title"><h3>Quadríceps</h3></LeftTableValue>
              <RightTableValue color06={membersComparison(iml06quad, imr06quad)}><h3>QF-QF: {membersComparison(iml06quad, imr06quad)}%</h3></RightTableValue>
            </TableLine>
            <TableLine>
              <LeftTableValue><h3>{iml06quad}cm</h3></LeftTableValue>
              <RightTableValue><h3>{imr06quad}cm</h3></RightTableValue>
            </TableLine>
          </>
          : null}
        {iml06isqui || imr06isqui ?
          <>
            <TableLine>
              <LeftTableValue color="title"><h3>Isquiostibiais</h3></LeftTableValue>
              <RightTableValue color06={membersComparison(iml06isqui, imr06isqui)}><h3>IQT-IQT: {membersComparison(iml06isqui, imr06isqui)}%</h3></RightTableValue>
            </TableLine>
            <TableLine>
              <LeftTableValue><h3>{iml06isqui}cm</h3></LeftTableValue>
              <RightTableValue><h3>{imr06isqui}cm</h3></RightTableValue>
            </TableLine>
            <TableLine margin="top">
              <LeftTableValue blockSize="33%" color06qfIqt={Math.round((iml06isqui/iml06quad)*100)}><h3>{Math.round((iml06isqui/iml06quad)*100)}%</h3></LeftTableValue>
              <MiddleTableValue color="title"><h3>QF-IQT</h3></MiddleTableValue>
              <RightTableValue blockSize="33%" color06qfIqt={Math.round((imr06isqui/imr06quad)*100)}><h3>{Math.round((imr06isqui/imr06quad)*100)}%</h3></RightTableValue>
            </TableLine>
          </>
          : null}
        {iml07sh || imr07sh || cmj07 ?
          <>
            <TableLine>
              <LeftTableValue color="title" borderPosition="bottom"><h3>CMJ</h3></LeftTableValue>
              <RightTableValue><h3>{cmj07}cm</h3></RightTableValue>
            </TableLine>
            <TableLine>
              <LeftTableValue color="title"><h3>Single Hop</h3></LeftTableValue>
              <RightTableValue color07shSh={membersComparison(iml07sh, imr07sh)}><h3>{membersComparison(iml07sh, imr07sh)}%</h3></RightTableValue>
            </TableLine>
            <TableLine>
              <LeftTableValue><h3>{iml07sh}cm</h3></LeftTableValue>
              <RightTableValue><h3>{imr07sh}cm</h3></RightTableValue>
            </TableLine>
          </>
          : null}
        {cmj08 || sj08 ?
          <>
            <TableLine>
              <LeftTableValue blockSize="33%" color="title"><h3>CMJ</h3></LeftTableValue>
              <MiddleTableValue blockSize="33%" color="title"><h3>CMJ-SJ</h3></MiddleTableValue>
              <RightTableValue blockSize="33%" color="title"><h3>SJ</h3></RightTableValue>
            </TableLine>
            <TableLine borderPosition="bottom">
              <LeftTableValue blockSize="33%"><h3>{cmj08}cm</h3></LeftTableValue>
              <MiddleTableValue blockSize="33%" cmjSj={Math.round((cmj08/sj08)*100) - 100}><h3>{Math.round((cmj08/sj08)*100) - 100}%</h3></MiddleTableValue>
              <RightTableValue blockSize="33%"><h3>{sj08}cm</h3></RightTableValue>
            </TableLine>
          </>
          : null}
        {iml08cmjuni || imr08cmjuni ?
          <>
            <TableLine>
              <LeftTableValue blockSize="33%"><h3>{iml08cmjuni}cm</h3></LeftTableValue>
              <MiddleTableValue color="title"><h3>CMJ-Uni</h3></MiddleTableValue>
              <RightTableValue blockSize="33%"><h3>{imr08cmjuni}cm</h3></RightTableValue>
            </TableLine>
          </>
          : null}
        {observation ? 
          <TableLine borderPosition="top" heigthSize="message"><h3>Observação: {observation}</h3></TableLine>
          : null}
      </figure> 
    </EvaluationCard>
  );
}

const EvaluationCard = styled.button`
  width: 330px;
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
    height: auto;
    background-color: #001522;
    border-radius: 0 0 15px 15px;
    padding: 10px 10px 10px 10px;
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
  height: 100px;
  background-color: #05A9F1;
  padding: 0 10px 0 10px;
  border-radius: 7px 7px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;`

const TableLine = styled.div`
  width: ${props => (
    (props.color === "title") ? "calc(100% - 20px)"
    : "100%"
  )};
  height: ${props => (
      (props.heigthSize === "message") ? "auto"
      : "45px"
    )};
  background-color: ${props => (
    (props.color === "title") ? "#05A9F1"
    : "inherit"
  )};
  padding: 0 10px 0 10px;
  margin-top: ${props => (
    (props.margin === "top") ? "10px"
    : "0"
  )};
  border-top: ${props => (
      (props.borderPosition === "top") ? "1px solid #FFFFFF"
      : null
    )};
  border-bottom: ${props => (
      (props.borderPosition === "bottom") ? "1px solid #FFFFFF"
      : null
    )};
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  h3 {
    width: 100%;
    text-align: center;
  }`

const LeftTableValue = styled.div`
  width: ${props => (
    props.blockSize ? "calc(100%/3)"
    : "50%"
  )};
  height: 100%;
  background-color: ${props => (
      (props.color === 1 || props.color === "positivo" || props.color02 < 40 || props.color04 < 20 || props.color04 > 50 || props.color05 < 30 || props.color05 > 50 || props.color06qfIqt < 50 || props.color06qfIqt > 80 || props.color07shSh > 20 || props.cmjSj < 5 || props.cmjSj > 20) ? "#E14D3F"
      : (props.color === 3 || props.color === "negativo" || props.color02 >= 60 || (props.color04 <= 40 && props.color04 >= 30) || (props.color05 <= 45 && props.color05 >= 35) || (props.color06qfIqt <= 60 && props.color06qfIqt >= 70) || props.color07shSh <= 10) || (props.cmjSj <= 15 && props.cmjSj >= 10) ? "#3DA59B"
      : (props.color === 2 || (props.color02 >= 40 && props.color02 < 60) || ((props.color04 < 30 && props.color04 >= 20) || (props.color04 <= 50 && props.color04 > 40)) || ((props.color05 < 35 && props.color05 >= 30) || (props.color05 <= 50 && props.color05 > 45)) || ((props.color06qfIqt < 60 && props.color06qfIqt >= 50) || (props.color06qfIqt <= 80 && props.color06qfIqt > 70)) || (props.color07shSh <= 20 && props.color07shSh > 10) || ((props.cmjSj < 10 && props.cmjSj >= 5) || (props.cmjSj <= 20 && props.cmjSj > 15))) ? "#E0BD55"
      : (props.color === "title") ? "#05A9F1"
      : "inherit"
    )};
  border-right: 2px solid #FFFFFF;
  border-bottom: ${props => (
      (props.borderPosition === "bottom") ? "4px solid #FFFFFF"
      : null
    )};
  border-spacing: 0;
  border-radius: ${props => (
    (props.color === "title") ? "none"
      : "25px 0 0 25px"
    )};
  display: flex;
  justify-content: center;
  align-items: center;`
  
const RightTableValue = styled.div`
  width: ${props => (
    props.blockSize? "calc(100%/3)"
    : "50%"
  )};
  height: 100%;
  background-color: ${props => (
      (props.color === 1 || props.color === "positivo" || props.color02 < 40 || props.color04 < 20 || props.color04 > 50 || props.color05 < 30 || props.color05 > 50 || props.color06 > 20  || props.color06qfIqt < 50 || props.color06qfIqt > 80 || props.color07shSh > 20 || props.cmjSj < 5 || props.cmjSj > 20)? "#E14D3F"
      : (props.color === 3 || props.color === "negativo" || props.color02 >= 60 || (props.color04 <= 40 && props.color04 >= 30) || (props.color05 <= 45 && props.color05 >= 35) || props.color06 <= 10 || (props.color06qfIqt <= 60 && props.color06qfIqt >= 70) || props.color07shSh <= 10) || (props.cmjSj <= 15 && props.cmjSj >= 10) ? "#3DA59B"
      : (props.color === 2 || (props.color02 >= 40 && props.color02 < 60) || ((props.color04 < 30 && props.color04 >= 20) || (props.color04 <= 50 && props.color04 > 40)) || ((props.color05 < 35 && props.color05 >= 30) || (props.color05 <= 50 && props.color05 > 45)) || (props.color06 <= 20 && props.color06 > 10) || ((props.color06qfIqt < 60 && props.color06qfIqt >= 50) || (props.color06qfIqt <= 80 && props.color06qfIqt > 70)) || (props.color07shSh <= 20 && props.color07shSh > 10) || ((props.cmjSj < 10 && props.cmjSj >= 5) || (props.cmjSj <= 20 && props.cmjSj > 15))) ? "#E0BD55"
      : (props.color === "title") ? "#05A9F1"
      : "inherit"
    )};
  border-radius: ${props => (
    (props.color === "title") ? "none"
      : "0 25px 25px 0"
    )};
  display: flex;
  justify-content: center;
  align-items: center;`

const MiddleTableValue = styled.div`
  width: calc(100%/3);
  height: 100%;
  background-color: ${props => (
      (props.color === 1 || props.color === "positivo" || props.color02 < 40 || props.color04 < 20 || props.color04 > 50 || props.color05 < 30 || props.color05 > 50 || props.color06qfIqt < 50 || props.color06qfIqt > 80 || props.color07shSh > 20 || props.cmjSj < 5 || props.cmjSj > 20) ? "#E14D3F"
      : (props.color === 3 || props.color === "negativo" || props.color02 >= 60 || (props.color04 <= 40 && props.color04 >= 30) || (props.color05 <= 45 && props.color05 >= 35) || (props.color06qfIqt <= 60 && props.color06qfIqt >= 70) || props.color07shSh <= 10) || (props.cmjSj <= 15 && props.cmjSj >= 10) ? "#3DA59B"
      : (props.color === 2 || (props.color02 >= 40 && props.color02 < 60) || ((props.color04 < 30 && props.color04 >= 20) || (props.color04 <= 50 && props.color04 > 40)) || ((props.color05 < 35 && props.color05 >= 30) || (props.color05 <= 50 && props.color05 > 45)) || ((props.color06qfIqt < 60 && props.color06qfIqt >= 50) || (props.color06qfIqt <= 80 && props.color06qfIqt > 70)) || (props.color07shSh <= 20 && props.color07shSh > 10) || ((props.cmjSj < 10 && props.cmjSj >= 5) || (props.cmjSj <= 20 && props.cmjSj > 15))) ? "#E0BD55"
      : (props.color === "title") ? "#05A9F1"
      : "inherit"
    )};
  border-right: 2px solid #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;`