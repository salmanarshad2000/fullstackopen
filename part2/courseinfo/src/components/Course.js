const Header = ({ courseName }) => {
  return (
    <h2>{courseName}</h2>
  )
}

const Content = ({ parts }) => {
  return parts.map(part => (
    <Part key={part.id} part={part} />
  ))
}

const Part = ({ part }) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

const Summary = ({ parts }) => {
  const total = parts.reduce((total, part) => total + part.exercises, 0)
  return (
    <p><b>total of {total} exercises</b></p>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Summary parts={course.parts} />
    </div>
  )
}

export default Course
