import React from "react";

import "./Button.css";

const Button = ({
  modificator,
  children
}) => {
  return (
    <button
      className={`button ${modificator}`}
    >
      {children}
    </button>
  );
};

export default Button;
