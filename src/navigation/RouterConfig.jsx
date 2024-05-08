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
import AllAudioTourBookMark from "../components/AllAudioTourBookMark";
import Categories from "../components/Categories";
import ChooseCategoryAudioTours from "../components/ChooseCategoryAudioTours";
import WatchUserAudioTour from "../components/WatchUserAudioTour";
import CreateCourse from "../components/CreateCourse";
import AllCourses from "../components/AllCourses";
import AllCourseBookMark from "../components/AllCourseBookMark";

import {
  ROOT,
  AUTHORIZATION,
  REGISTRATION,
  PERSONAL_ACCOUNT,
  CREATE_AUDIO_TOUR,
  All_AUDIO_TOUR,
  USER_AUDIO_TOUR,
  AUDIO_TOUR,
  AUDIO_TOUR_BOOKMARK,
  CATEGORIES_TOUR,
  WATCH_TOUR,
  CREATE_COURSE,
  All_COURSES,
  COURSE_BOOKMARK,
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
      <Route
        path={AUDIO_TOUR_BOOKMARK}
        element={
          <RequiredAuth>
            <AllAudioTourBookMark />
          </RequiredAuth>
        }
      />
      <Route
        path={CATEGORIES_TOUR}
        element={
          <RequiredAuth>
            <Categories />
          </RequiredAuth>
        }
      />
      <Route
        path={`/category/:id`}
        element={
          <RequiredAuth>
            <ChooseCategoryAudioTours />
          </RequiredAuth>
        }
      />
      <Route
        path={`/audio_tour_watch/:id`}
        element={
          <RequiredAuth>
            <WatchUserAudioTour />
          </RequiredAuth>
        }
      />
      <Route
        path={CREATE_COURSE}
        element={
          <RequiredAuth>
            <CreateCourse />
          </RequiredAuth>
        }
      />
      <Route
        path={All_COURSES}
        element={
          <RequiredAuth>
            <AllCourses />
          </RequiredAuth>
        }
      />
      <Route
        path={COURSE_BOOKMARK}
        element={
          <RequiredAuth>
            <AllCourseBookMark />
          </RequiredAuth>
        }
      />
    </Routes>
  );
};

export default RouterConfig;
