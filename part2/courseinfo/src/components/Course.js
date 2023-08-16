const Header = ({ courseName }) => {
  return (<h2>{courseName}</h2>)
}

const Content = ({ parts }) => {
  return parts.map(part => (<Part key={part.id} part={part} />))
}

const Part = ({ part }) => {
  return (<p>{part.name} {part.exercises}</p>)
}

const Course = ({ course }) => {
  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

export default Course
