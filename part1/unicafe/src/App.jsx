import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  if (total === 0) {
    return (
      <div>No feedback given</div>
    )
  } else {
    const average = (good - bad) / total
    const positive = 100 * good / total
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={average.toFixed(2)} />
          <StatisticLine text="positive" value={positive.toFixed(2) + "%"} />
        </tbody>
      </table>
    )
  }
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <h1>give feedback</h1>
      <p>
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
      </p>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App