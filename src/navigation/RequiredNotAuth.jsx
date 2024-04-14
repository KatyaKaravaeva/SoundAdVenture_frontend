import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { ROOT } from "./routes";

const RequiredNotAuth = ({ children }) => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const location = useLocation();
  if (isAuth) {
    return <Navigate to={ROOT} state={{ from: location.pathname }} />;
  }
  return children;
};

export default RequiredNotAuth;
