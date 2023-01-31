import React, {useContext} from "react";
import { Navigate } from "react-router-dom";
import { UserLoginContext } from "../Provider/UserLoginProvider";
import { CarouselImage } from "./CarouselImage";
import '../../CSS/HomePage.css';

export const Homepage = () => {
  const [state, dispatch] = useContext(UserLoginContext);

  if(state.user.name === null){
    return <Navigate to="/login"/>
  }

  return (
    <div className="">
      <CarouselImage/>
    </div>
  );
};
