import React from "react";

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if (good !== 0 || neutral !== 0 || bad !== 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <tr>
              <td>good</td>
              <td>{good}</td>
            </tr>
            <tr>
              <td>neutral</td>
              <td>{neutral}</td>
            </tr>
            <tr>
              <td>bad</td>
              <td>{bad}</td>
            </tr>
            <tr>
              <td>all </td>
              <td>{total}</td>
            </tr>
            <tr>
              <td>average</td>
              <td>{average / total}</td>
            </tr>
            <tr>
              <td>positive</td>
              <td>{positive}%</td>
            </tr>
          </tbody>
        </table>
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
