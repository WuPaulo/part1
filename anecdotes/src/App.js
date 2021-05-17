import React, { useState } from "react";
import Button from "./Button";
import Points from "./Points";
import Largest from "./Largest";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0]);
  const [selected, setSelected] = useState(0);
  const [mostVotes, setMostVotes] = useState("");

  const randomAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };

  const addPoints = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
    const max = Math.max(...votes);
    console.log(max);
    let maxIndex = max;

    for (let i = 0; i <= votes.length; i++) {
      if (votes[i] === max) {
        maxIndex = i;
      }
    }

    setMostVotes(anecdotes[maxIndex]);
  };

  return (
    <div>
      {anecdotes[selected]}
      <Points votes={votes[selected]} />
      <Button handleClick={randomAnecdote} pointsClick={addPoints} />
      <Largest mostVotes={mostVotes} />
    </div>
  );
};

export default App;
