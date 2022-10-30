import React from "react";

import "./Button.css";

const Button = ({
  type,
  modificator = '',
  children
}) => {
  return (
    <button type={type}
      className={`button ${modificator}`}
    >
      {children}
    </button>
  );
};

export default Button;
