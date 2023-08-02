const Header = (props) => {
  return (<h1>{props.course}</h1>)
}
const Part = (props) => {
  return (<p>{props.part.name} {props.part.exercises}</p>)
}
const Content = (props) => {
  return props.parts.map((part, i) => (<Part key={i} part={part} />))
}
const Total = (props) => {
  const value = props.parts.reduce((total, part) => {
    total += part.exercises
    return total
  }, 0)
  return (<p>Number of exercises {value}</p>)
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [{
      name: 'Fundamentals of React',
      exercises: 10
    }, {
      name: 'Using props to pass data',
      exercises: 7
    }, {
      name: 'State of a component',
      exercises: 14
    }]
  }
  return (<div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>)
}

export default App
