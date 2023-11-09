import styled from "styled-components";
import Header from "./Header";
import Aside from "./Aside";

export default function HomePage ({ children }) {

  return (
    <Private>
      <Header />
      <main>
        <Aside />
        {children}
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
  }`;