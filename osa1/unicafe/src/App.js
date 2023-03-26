import { useState } from "react";

// Button-komponentti, joka vastaanottaa onClick- ja text-propsit
// ja renderöi napin, jonka teksti on text-propsin arvo ja jonka klikkauksesta
// kutsutaan onClick-propsin funktiota
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

// StatisticLine-komponentti, joka vastaanottaa text- ja value-propsit
// ja renderöi tekstirivin, jossa on text-propsin ja value-propsin arvot
const StatisticLine = ({ text, value }) => {
  return (
    <div>
      <p>
        {text} {value}
      </p>
    </div>
  );
};

// Luodaan Statistics-komponentti, joka vastaanottaa good-, neutral- ja bad-propsit
// ja renderöi tilastot
const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = [good + bad * -1] / all;
  const positive = (good * 100) / all + " %";

  if (all !== 0) {
    return (
      <div>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} />
      </div>
    );
    // Jos palautteita ei ole vielä annettu, näytetään teksti "No feedback given"
  } else {
    return <div>No feedback given</div>;
  }
};

// App-komponentti, joka renderöi napit ja tilastot
const App = () => {
  // Luodaan tilamuuttujat good, neutral ja bad useState-hookin avulla
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Luodaan funktiot napin klikkauksen käsittelyä varten
  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  // Renderöidään napit ja tilastot
  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
