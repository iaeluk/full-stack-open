import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
    <Part partName={props.parts[0].name} number={props.parts[0].exercises} />
    <Part partName={props.parts[1].name} number={props.parts[1].exercises} />
    <Part partName={props.parts[2].name} number={props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.numbers[0] + props.numbers[1] + props.numbers[2]} </p>
  )
}

const Part = (props) => {
  return (
    <p>{props.partName} {props.number}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts={[part1, part2, part3]} />
      <Total numbers={[part1.exercises, part2.exercises, part3.exercises]}/>
    </div>
  )
}

export default App