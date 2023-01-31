import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import "../../../CSS/Menu.css";
import { UserLoginContext } from "../../Provider/UserLoginProvider";
import { Logout } from "../../User/Logout";
import MernImg from '../../../Images/mern.png';

export const Menu = () => {
  const [state, dispatch] = useContext(UserLoginContext);
  
  return (
    <>
      <ul class="menu-items">
        <img src={MernImg} className="menu-img"/>
        <li><Link to="/">Home</Link></li>
        {state.user.name === null ? <li><Link to="/login">Login</Link></li> :<Logout/>}
        {state.user.name !== null && <span>Welcome, {state.user.name}</span>}
      </ul>
    </>
  );
};
