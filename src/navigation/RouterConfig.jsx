import React, { lazy } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Authorization from "../components/Authorization";
import MainPage from "../components/MainPage";
import Registration from "../components/Registration";
import Profile from "../components/Profile";
import CreateAudioTour from "../components/CreateAudioTour";
import AllAudioTour from "../components/AllAudioTour";
import UserAudioTour from "../components/UserAudioTour";
import UpdateWatchUserAudioTour from "../components/UpdateWatchUserAudioTour";

import {
  ROOT,
  AUTHORIZATION,
  REGISTRATION,
  PERSONAL_ACCOUNT,
  CREATE_AUDIO_TOUR,
  All_AUDIO_TOUR,
  USER_AUDIO_TOUR,
  AUDIO_TOUR,
} from "./routes";
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

      <Route
        path={All_AUDIO_TOUR}
        element={
          <RequiredAuth>
            <AllAudioTour />
          </RequiredAuth>
        }
      />

      <Route
        path={USER_AUDIO_TOUR}
        element={
          <RequiredAuth>
            <UserAudioTour />
          </RequiredAuth>
        }
      />

      <Route
        path={`${AUDIO_TOUR}/:id`}
        element={
          <RequiredAuth>
            <UpdateWatchUserAudioTour />
          </RequiredAuth>
        }
      />
    </Routes>
  );
};

export default RouterConfig;
