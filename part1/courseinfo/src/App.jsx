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
      <Content
        part1={part1}
        num1={exercises1}
        part2={part2}
        num2={exercises2}
        part3={part3}
        num3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} num={props.num1}/>
      <Part part={props.part2} num={props.num2}/>
      <Part part={props.part3} num={props.num3}/>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.num}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total} </p>
    </div>
  )
}

export default App