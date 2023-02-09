import { useState } from 'react'

const History = (props) => {
  if (props.allClick.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  const all2 = props.good + props.neutral + props.bad

  return (
    <div>
      <table>
        <tbody>
          <tr> 
            <td> <Statistic title="good" /> </td>
            <td> <Statistic type={props.good} /> </td>
          </tr>

          <tr>
            <td> <Statistic title="neutral" /> </td>
            <td> <Statistic type={props.neutral} /> </td>
          </tr>

          <tr>
            <td> <Statistic title="bad" /> </td>
            <td> <Statistic type={props.bad} />  </td>
          </tr>

          <tr>
            <td> <Statistic title="all" /> </td>
            <td> <Statistic type={all2} /> </td>
          </tr>

          <tr>
            <td> <Statistic title="positive" /> </td>
            <td> <Statistic type={ props.good / all2 * 100 } /> </td>
          </tr>
        </tbody>
      </table>  
    </div>
  )
}

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}> {props.text} </button>
    </div>
  )
}

const Statistic = (props) => {
  return (
    <div>
      <p>{props.title} {props.type} </p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClick, setClick] = useState([])

  const inlineButton = {
    display: 'inline-flex',
    gap: '10px'
  }

  const goodClick = () => {
    setClick(allClick.concat('G'))
    setGood(good + 1)
  }

  const neutralClick = () => {
    setClick(allClick.concat('N'))
    setNeutral(neutral + 1)
  }

  const badClick = () => {
    setClick(allClick.concat('B'))
    setBad(bad + 1)
  }

  return (
    <div>
      <h1> give feedback </h1>
      <div style={inlineButton}>
        <Button handleClick={goodClick} text="good"/>
        <Button handleClick={neutralClick} text="neutral"/>
        <Button handleClick={badClick} text="bad" />
      </div>

      <h1> statistics </h1>

      <History allClick={allClick} good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App 