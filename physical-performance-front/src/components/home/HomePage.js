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
          {children}
        </Container>  
      </main>
    </Private>
  );
}

const Private = styled.section`
  width: 100%;
  height: 100vh;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;`

  const Title = styled.div`
    width: 100%;
    height: 170px;
    padding-left: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
  `;