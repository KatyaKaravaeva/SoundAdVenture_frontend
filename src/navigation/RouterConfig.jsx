import React, { lazy } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Authorization from "../components/Authorization";
import MainPage from "../components/MainPage";
import Registration from "../components/Registration";
import Profile from "../components/Profile";
import CreateAudioTour from "../components/CreateAudioTour";

import { ROOT, AUTHORIZATION, REGISTRATION, PERSONAL_ACCOUNT, CREATE_AUDIO_TOUR } from "./routes";
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

      <Route
        path={PERSONAL_ACCOUNT}
        element={
          <RequiredAuth>
            <Profile />
          </RequiredAuth>
        }
      />

      <Route
        path={CREATE_AUDIO_TOUR}
        element={
          <RequiredAuth>
            <CreateAudioTour />
          </RequiredAuth>
        }
      />
    </Routes>
  );
};

export default RouterConfig;