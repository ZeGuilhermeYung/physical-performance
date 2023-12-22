import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import TitleContext from "../context/TitleContext";
import HomePage from "./home/HomePage";
import Patients from "./private/patients/Patients";
import Evaluations from "./private/evaluations/Evaluations";
import FunctionalEv from "./private/FunctionalEv";
import Evaluation from "./private/evaluation/Evaluation";

export default function App () {
  const [title, setTitle] = useState("");

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <TitleContext.Provider value={{ title, setTitle }}>
          <Routes>
            <Route
              path="/patients"
              element={
                <HomePage>
                  <Patients />
                </HomePage>
              } />
            <Route
              path="/patients/:patientId/evaluations"
              element={
                <HomePage>
                  <Evaluations />
                </HomePage>
              } />
              <Route
              path="/patients/:patientId/evaluations/:evType/:id"
              element={
                <HomePage>
                  <Evaluation />
                </HomePage>
              } />
          </Routes>
        </TitleContext.Provider>
      </BrowserRouter>
    </>
  );
}