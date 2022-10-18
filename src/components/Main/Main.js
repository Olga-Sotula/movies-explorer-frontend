import React from "react";

import Promo from "../Promo/Promo.js";
import NavTab from "../NavTab/NavTab.js";
import AboutProject from "../AboutProject/AboutProject.js";

import "./Main.css";

const Main = () => {
  return(
    <>
      <Promo/>
      <NavTab/>
      <AboutProject/>
    </>
  );
}

export default Main;
