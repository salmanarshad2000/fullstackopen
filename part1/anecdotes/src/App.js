import { useState } from 'react'

const Anecdote = ({ anecdoteText, anecdoteVotes }) => {
  return (
    <p>{anecdoteText}<br />has {anecdoteVotes} votes</p>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array.from(anecdotes, () => 0))
  const handleNext = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
  }
  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  const mostvotes = Math.max(...votes);
  const mostvoted = votes.findIndex(v => v === mostvotes);
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdoteText={anecdotes[selected]} anecdoteVotes={votes[selected]} />
      <p>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleNext}>next anecdote</button>
      </p>
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdoteText={anecdotes[mostvoted]} anecdoteVotes={votes[mostvoted]} />
    </div>
  )
}

export default App