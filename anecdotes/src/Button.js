import React from "react";

const Button = ({ handleClick, pointsClick }) => {
  return (
    <div>
      <button onClick={pointsClick}>Vote</button>
      <button onClick={handleClick}>next anecdote</button>
    </div>
  );
};

export default Button;
