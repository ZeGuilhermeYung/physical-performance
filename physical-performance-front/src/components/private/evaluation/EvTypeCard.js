import styled from "styled-components";

export default function EvTypeCard ( {
  id,
  index,
  evaluationId,
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
  }

  return (
    <EvaluationCard>
      <NameContainer>
        <h3>{functEvType(index)}</h3>
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
          <TableLine>
            <LeftTableValue color04={iml04}><h3>{iml04}°</h3></LeftTableValue>
            <RightTableValue color04={imr04}><h3>{imr04}°</h3></RightTableValue>
          </TableLine>
          : null}
        {iml05dist || imr05dist ? 
          <TableLine borderPosition="bottom">
            <LeftTableValue color05={iml05dist}><h3>{iml05dist}cm</h3></LeftTableValue>
            <RightTableValue color05={imr05dist}><h3>{imr05dist}cm</h3></RightTableValue>
          </TableLine>
          : null}
        {iml05ang || imr05ang ? 
          <TableLine>
            <LeftTableValue color05={iml05ang}><h3>{iml05ang}°</h3></LeftTableValue>
            <RightTableValue color05={imr05ang}><h3>{imr05ang}°</h3></RightTableValue>
          </TableLine>
          : null}
        {iml06quad || imr06quad ?
          <>
            <TableLine borderPosition="bottom"><h3>Quadríceps</h3></TableLine>
            <TableLine borderPosition="bottom">
              <LeftTableValue color06={iml06quad}><h3>{iml06quad}cm</h3></LeftTableValue>
              <RightTableValue color06={imr06quad}><h3>{imr06quad}cm</h3></RightTableValue>
            </TableLine>
          </>
          : null}
        {iml06isqui || imr06isqui ?
          <>
            <TableLine borderPosition="bottom"><h3>Isquiostibiais</h3></TableLine>
            <TableLine>
              <LeftTableValue color06={iml06isqui}><h3>{iml06isqui}cm</h3></LeftTableValue>
              <RightTableValue color06={imr06isqui}><h3>{imr06isqui}cm</h3></RightTableValue>
            </TableLine>
          </>
          : null}
        <h3>{cmj07 ? 'CMJ07: ' + cmj07 : null}</h3>
        <h3>{iml07sh ? 'MIE Sh: ' + iml07sh : null}</h3>
        <h3>{imr07sh ? 'MID Sh: ' + imr07sh : null}</h3>
        <h3>{cmj08 ? 'CMJ08: ' + cmj08 : null}</h3>
        <h3>{sj08 ? 'SJ08: ' + sj08 : null}</h3>
        <h3>{iml08cmjuni ? 'MIE CMJ Uni: ' + iml08cmjuni : null}</h3>
        <h3>{imr08cmjuni ? 'MID CMJ Uni: ' + imr08cmjuni : null}</h3>
        <h3>{observation ? 'Observação: ' + observation : null}</h3>
      </figure> 
    </EvaluationCard>
  );
}

const EvaluationCard = styled.button`
  width: 280px;
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
  width: 100%;
  height: 45px;
  padding: 0 10px 0 10px;
  border-top: ${props => (
      (props.borderPosition === "top") ? "2px solid #FFFFFF"
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
    width: 50%;
    text-align: center;
  }`

const LeftTableValue = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${props => (
      (props.color === 1 || props.color === "positivo" || props.color02 < 40 || props.color04 < 20 || props.color04 > 50) ? "#E14D3F"
      : (props.color === 3 || props.color === "negativo" || props.color02 >= 60 || (props.color04 <= 40 && props.color04 >= 30)) ? "#3DA59B"
      : (props.color === 2 || (props.color02 >= 40 && props.color02 < 60 || (props.color04 < 30 && props.color04 >= 20) || (props.color04 <= 50 && props.color04 > 40))) ? "#E0BD55"
      : "inherit"
    )};
  border-right: 2px solid #FFFFFF;
  border-spacing: 0;
  border-radius: 25px 0 0 25px;
  display: flex;
  justify-content: center;
  align-items: center;`
  
const RightTableValue = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${props => (
      (props.color === 1 || props.color === "positivo" || props.color02 < 40 || props.color04 < 20 || props.color04 > 50) ? "#E14D3F"
      : (props.color === 3 || props.color === "negativo" || props.color02 >= 60 || (props.color04 <= 40 && props.color04 >= 30)) ? "#3DA59B"
      : (props.color === 2 || (props.color02 >= 40 && props.color02 < 60 || (props.color04 < 30 && props.color04 >= 20) || (props.color04 <= 50 && props.color04 > 40))) ? "#E0BD55"
      : "inherit"
    )};
  border-radius: 0 25px 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;`