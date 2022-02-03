import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
    <Part partName={props.part[0]} number={props.number[0]} />
    <Part partName={props.part[1]} number={props.number[1]} />
    <Part partName={props.part[2]} number={props.number[2]} />
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part={[part1, part2, part3]} number={[exercises1, exercises2, exercises3]} />
      <Total numbers={[exercises1, exercises2, exercises3]}/>
    </div>
  )
}

export default App