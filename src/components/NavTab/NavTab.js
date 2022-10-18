import React from "react";

import "./NavTab.css";

const NavTab = () => {
  return (
    <nav className="navtab">
      <a class="navtab__link" href="#about">
        О проекте
      </a>
      <a class="navtab__link" href="#techs">
        Технологии
      </a>
      <a class="navtab__link" href="#student">
        Студент
      </a>
    </nav>
  );
};

export default NavTab;
