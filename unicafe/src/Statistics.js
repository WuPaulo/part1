import React from "react";

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if (good != 0 || neutral != 0 || bad != 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {total}</p>
        <p>{average}</p>
        <p>{positive}%</p>
      </div>
    );
  }
  return (
    <div>
      <h2>Statistics</h2>
      <p>No feedback given</p>
    </div>
  );
};

export default Statistics;
