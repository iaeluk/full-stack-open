import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
    <Part partName={props.parts.parts[0].name} number={props.parts.parts[0].exercises} />
    <Part partName={props.parts.parts[1].name} number={props.parts.parts[1].exercises} />
    <Part partName={props.parts.parts[2].name} number={props.parts.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.parts.parts[0].exercises + props.parts.parts[1].exercises + props.parts.parts[2].exercises} </p>
  )
}

const Part = (props) => {
  return (
    <p>{props.partName} {props.number}</p>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts={course} />
      <Total parts={course} />
    </div>
  )
}

export default App