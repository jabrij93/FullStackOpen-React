import { useState } from 'react'
import Display from './Components/Display'
import Button from './Components/Button'

const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const decreaseByOne = () =>  { 
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }

  const resetBackToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={increaseByOne} text="Increase by 1" />
      <Button onClick={decreaseByOne} text="Decrease by 1" />
      <Button onClick={resetBackToZero} text="Reset back to 0"/>
    </div>
  )
}

export default App