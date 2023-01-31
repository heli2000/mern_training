import React from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "../Header/Menu";
import { Footer } from "./Footer";

export const Includes = () => {
  return (
    <>
      <Menu />
        <Outlet/>
      <Footer />
    </>
  );
};
