const Header = (props) => {
  return (<h1>{props.heading}</h1>)
}
const Part = (props) => {
  return (<p>{props.part} {props.exercises}</p>)
}
const Content = (props) => {
  return props.data.map((item, i) => (<Part key={i} part={item.part} exercises={item.exercises} />))
}
const Total = (props) => {
  let value = props.data.reduce((total, item) => {
    total += item.exercises
    return total
  }, 0)
  return (<p>Number of exercises {value}</p>)
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  let data = [
    { part: part1, exercises: exercises1 },
    { part: part2, exercises: exercises2 },
    { part: part3, exercises: exercises3 }
  ]
  return (<>
    <Header heading={course} />
    <Content data={data} />
    <Total data={data} />
  </>)
}

export default App
