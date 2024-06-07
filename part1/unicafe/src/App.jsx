import { useState } from "react";

const Header = ({ text }) => {
  return (
    <>
      <h1>{text}</h1>
    </>
  );
};

const Button = ({ text, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  );
};

const Stats = ({ text, value }) => {
  return (
    <>
      <p>
        {text} {value}
      </p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackHeader = "give feedback";
  const statHeader = "statistics";
  const goodText = "good";
  const neutText = "neutral";
  const badText = "bad";

  return (
    <div>
      <Header text={feedbackHeader} />

      <Button text={goodText} onClick={() => setGood(good + 1)} />
      <Button text={neutText} onClick={() => setNeutral(neutral + 1)} />
      <Button text={badText} onClick={() => setBad(bad + 1)} />

      <Header text={statHeader} />

      <Stats text={goodText} value={good} />
      <Stats text={neutText} value={neutral} />
      <Stats text={badText} value={bad} />
    </div>
  );
};

export default App;
