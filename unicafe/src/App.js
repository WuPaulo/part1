import React, { useState } from "react";
import Header from "./Header";
import Button from "./Button";
import Statistics from "./Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodIncrease = () => setGood(good + 1);
  const neutralIncrease = () => setNeutral(neutral + 1);
  const badIncrease = () => setBad(bad + 1);

  return (
    <div>
      <Header />
      <Button handleClick={goodIncrease} name={"good"} />
      <Button handleClick={neutralIncrease} name={"neutral"} />
      <Button handleClick={badIncrease} name="bad" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={good + neutral + bad}
        average={(good + neutral + bad) / 3}
        positive={(good / (good + neutral + bad)) * 100}
      />
    </div>
  );
};

export default App;
