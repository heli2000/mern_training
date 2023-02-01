import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../../CSS/Menu.css";
import { UserLoginContext } from "../../Provider/UserLoginProvider";
import { Logout } from "../../User/Logout";
import MernImg from '../../../Images/mern.png';
import { Login } from "../../User/Login";

export const Menu = () => {
  const [state, dispatch] = useContext(UserLoginContext);
  
  return (
    <>
      <ul className="menu-items">
        <img src={MernImg} className="menu-img"/>
        <li><Link to="/">Home</Link></li>
        {state.user.isAdmin && <li><Link to="/user-list">Users</Link></li>}
        {state.user.name === null ? <Login/>:<Logout/>}
        {state.user.name !== null && <span>Welcome, {state.user.name}</span>}
      </ul>
    </>
  );
};
