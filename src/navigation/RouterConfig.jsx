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
import UserCourses from "../components/UserCourses";
import WatchUserCourse from "../components/WatchUserCourse";
import UpdateWatchUserCourse from "../components/UpdateWatchUserCourse";
import CourseCategories from "../components/CourseCategories";
import ChooseCategoryCourse from "../components/ChooseCategoryCourse";
import Contact from "../components/Contact";
import AllUsersControl from "../components/AllUsersControl";

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
  USER_COURSES,
  WATCH_COURSE,
  COURSE,
  CATEGORIES_COURSE,
  CONTACT,
  ALL_USERS_CONTROL,
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
        path={`${COURSE}/:id`}
        element={
          <RequiredAuth>
            <UpdateWatchUserCourse />
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
        path={CATEGORIES_COURSE}
        element={
          <RequiredAuth>
            <CourseCategories />
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
        path={`/course_category/:id`}
        element={
          <RequiredAuth>
            <ChooseCategoryCourse />
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
      <Route
        path={ALL_USERS_CONTROL}
        element={
          <RequiredAuth>
            <AllUsersControl />
          </RequiredAuth>
        }
      />
      <Route
        path={USER_COURSES}
        element={
          <RequiredAuth>
            <UserCourses />
          </RequiredAuth>
        }
      />
      <Route
        path={`${WATCH_COURSE}/:id`}
        element={
          <RequiredAuth>
            <WatchUserCourse />
          </RequiredAuth>
        }
      />
      <Route
        path={CONTACT}
        element={
          <RequiredAuth>
            <Contact />
          </RequiredAuth>
        }
      />
    </Routes>
  );
};

export default RouterConfig;
