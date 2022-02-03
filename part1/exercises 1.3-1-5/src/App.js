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
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={[parts[0], parts[1], parts[2]]} />
      <Total numbers={[parts[0].exercises, parts[1].exercises, parts[2].exercises]} />
    </div>
  )
}

export default App