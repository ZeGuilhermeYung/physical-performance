import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import UserContext from "../context/UserContext";
import HomePage from "./home/HomePage";
import Patients from "./private/patients/Patients";
import Evaluations from "./private/evaluations/Evaluations";
import FunctionalEv from "./private/FunctionalEv";

export default function App () {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
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
              path="/patients/:patientId/functional/:evOrder"
              element={
                <HomePage>
                  <FunctionalEv />
                </HomePage>
              } />
          </Routes>
      </BrowserRouter>
    </>
  );
}