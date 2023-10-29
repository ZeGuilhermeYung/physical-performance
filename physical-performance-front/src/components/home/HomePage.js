import { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../context/UserContext";
import Header from "./Header";
import { Posts } from "../common";

export default function HomePage ({ children }) {

  return (
    <Private>
      <Header />
      <main>
        <Posts/>
      </main>
    </Private>
  );
}

const Private = styled.section` > main {
  width: 100%;
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}

main > div {
  width: 100%;
  height: 94px;
  background-color: #FFFFFF;
  padding: 13px 13px 13px 15px;
  border-radius: 5px;
  margin-bottom: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
main > div > div {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
form {
  width: 503px;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
}
span {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
span h5 {
  margin-right: 23px;
  cursor: pointer;
}
main ul {
  display: flex;
}`;