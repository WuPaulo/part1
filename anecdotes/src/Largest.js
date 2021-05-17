import React from "react";

const Largest = ({ mostVotes }) => {
  if (mostVotes !== 0) {
    return (
      <div>
        <h2>Anecdote with most votes</h2>
        <p>{mostVotes}</p>
        <p></p>
      </div>
    );
  }
  return (
    <div>
      <h2>Anecdote with most votes</h2>
    </div>
  );
};

export default Largest;
