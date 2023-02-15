import Course from './Course'
import Header from './components/Header'
import Part from './components/Part'
import Content from './components/Content'
import Total from './components/Total'

const App = () => {
  const course = [
  {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  },

  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]    

  return (
    <div>
    <Course/>
      <Header name={course[0].name} />
      <Content parts={course.parts} />
        <Part part={course[0].parts[0].name} exercises={course[0].parts[0].exercises} />
        <Part part={course[0].parts[1].name} exercises={course[0].parts[1].exercises} />
        <Part part={course[0].parts[2].name} exercises={course[0].parts[2].exercises} />
        <Part part={course[0].parts[3].name} exercises={course[0].parts[3].exercises} />
        <Total course={course[0]} />
      <Header name={course[1].name} />
        <Part part={course[1].parts[0].name} exercises={course[1].parts[0].exercises} />
        <Part part={course[1].parts[1].name} exercises={course[1].parts[1].exercises} />
        <Total course={course[1]} />
    </div>  
  ) 
}

export default App