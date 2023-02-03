import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserLoginContext } from "./Provider/UserLoginProvider";

export const ProtectedRoute = () => {
  const [user] = useContext(UserLoginContext);

  if (user.user._id === null) {
    return <Navigate to="/login" />;
  }

  return <Outlet/>
};
