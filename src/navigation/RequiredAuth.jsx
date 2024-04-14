import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { AUTHORIZATION } from "./routes";

const RequiredAuth = ({ children }) => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const location = useLocation();
  if (!isAuth) {
    return <Navigate to={AUTHORIZATION} state={{ from: location.pathname }} />;
  }
  return children;
};

export default RequiredAuth;
