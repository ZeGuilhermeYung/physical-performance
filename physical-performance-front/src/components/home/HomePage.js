import styled from "styled-components";
import Header from "./Header";
import Aside from "./Aside";
import { useContext } from "react";
import TitleContext from "../../context/TitleContext";

export default function HomePage ({ children }) {
  const { title } = useContext(TitleContext);

  return (
    <Private>
      <Header />
      <main>
        <Aside />
        <Container>
          <Title>
            <h1>{title}</h1>
          </Title>
          <CardsAndDashboard>
            {children}
          </CardsAndDashboard>
        </Container>  
      </main>
    </Private>
  );
}

const Private = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  main {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }`
  
  const Container = styled.article`
    width: 100%;
    height: 100%;
    margin: 0 0 50px 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;`

  const Title = styled.div`
    width: 100%;
    height: 120px;
    background-color: #20324E;
    padding-left: 150px;
    position: fixed;
    left: 380px;
    top: 70px;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;`
    
  const CardsAndDashboard = styled.figure`
    width: 100%;
    height: 100%;
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;`;