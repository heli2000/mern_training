import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../Services/UserService";
import { UserLoginContext } from "../Provider/UserLoginProvider";

export const Logout = () => {
  const [, dispatch] = useContext(UserLoginContext);
  const navigate = useNavigate();

  const userLogout = async () => {
    const fetch = await UserService.logoutUser();
    const data = await fetch.data;
    if(data){
      let user = { user: { _id: null, name: null, pass: null, __v: null } };
      dispatch({
        type: "logoutUser",
        payload: user,
      });
      navigate("/login");
    }
  };
  return (
    <>
      <li onClick={userLogout}><Link>Logout</Link></li>
    </>
  );
};
