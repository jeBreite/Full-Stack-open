import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistics = ({ good, neutral, bad }) => {
  const all = () => good + neutral + bad;
  const average = () => [good + bad * -1] / all();
  const positive = () => (good * 100) / all();
  return (
    <div>
      {" "}
      <p>all {all()}</p>
      <p>average {average()}</p>
      <p>positive {positive()}</p>
    </div>
  );
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
