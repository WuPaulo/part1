import React from "react";

const Button = ({ handleClick, name }) => {
  return (
    <div>
      <button onClick={handleClick}>{name}</button>
    </div>
  );
};

export default Button;
