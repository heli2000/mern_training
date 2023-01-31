import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserLoginContext } from "../Provider/UserLoginProvider";

export const Logout = () => {
  const [state, dispatch] = useContext(UserLoginContext);
  const navigate = useNavigate();

  const userLogout = () => {
    let user = { user: { _id: null, name: null, pass: null, __v: null } };
    dispatch({
      type: "logoutUser",
      payload: user,
    });
    navigate("/login");
  };
  return (
    <>
      <li onClick={userLogout}><Link>Logout</Link></li>
    </>
  );
};
