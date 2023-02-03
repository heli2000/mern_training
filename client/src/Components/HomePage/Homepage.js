import React, { useContext } from "react";
import { UserLoginContext } from "../Provider/UserLoginProvider";
import { CarouselImage } from "./CarouselImage";
import "../../CSS/HomePage.css";

export const Homepage = () => {
  return (
    <div className="">
      <CarouselImage />
    </div>
  );
};
