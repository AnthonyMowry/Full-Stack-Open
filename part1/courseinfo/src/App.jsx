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
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.exercises + part2.exercises + part3.exercises}/>
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
  const name = "name"
  const exercise = "exercises"
  return (
    <div>
      <Part part={props.part1[name]} num={props.part1[exercise]}/>
      <Part part={props.part2[name]} num={props.part2[exercise]}/>
      <Part part={props.part3[name]} num={props.part3[exercise]}/>
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