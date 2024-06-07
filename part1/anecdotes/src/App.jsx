/* eslint-disable react/prop-types */
import { useState } from "react";

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Header = ({ text }) => <h1>{text}</h1>;

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const anecdotesLen = anecdotes.length;
  const [selected, setSelected] = useState(0);
  const [mostVote, setMostVote] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotesLen).fill(0));

  const handleVote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);

    const max = copy.indexOf(Math.max(...copy));
    setMostVote(max);
  };

  const handleNextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotesLen));
  };

  return (
    <div>
      <Header text="Anecdote of the day" />
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <Button text="vote" onClick={handleVote} />
      <Button text="next anecdote" onClick={handleNextAnecdote} />

      <Header text="Anecdote with most votes" />
      <div>{anecdotes[mostVote]}</div>
      <div>has {votes[mostVote]} votes</div>
    </div>
  );
};

export default App;
