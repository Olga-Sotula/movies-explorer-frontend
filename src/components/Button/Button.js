import React from "react";

import "./Button.css";

const Button = ({
  type,
  modificator = '',
  onClick,
  children
}) => {
  return (
    <button type={type}
      className={`button ${modificator}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
