import React, { lazy } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Authorization from "../components/Authorization";
import MainPage from "../components/MainPage";
import Registration from "../components/Registration";

import { ROOT, AUTHORIZATION, REGISTRATION } from "./routes";
import RequiredAuth from "./RequiredAuth";
import RequiredNotAuth from "./RequiredNotAuth";

const RouterConfig = () => {
  return (
    <Routes>
      <Route
        path={ROOT}
        element={
          <RequiredAuth>
            <MainPage />
          </RequiredAuth>
        }
      />
      <Route
        path={AUTHORIZATION}
        element={
          <RequiredNotAuth>
            <Authorization />
          </RequiredNotAuth>
        }
      />
      <Route
        path={REGISTRATION}
        element={
          <RequiredNotAuth>
            <Registration />
          </RequiredNotAuth>
        }
      />
    </Routes>
  );
};

export default RouterConfig;
