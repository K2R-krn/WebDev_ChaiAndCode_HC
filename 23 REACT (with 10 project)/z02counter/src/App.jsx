import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let count = 15;

  const [counter, setCounter] = useState( 13)// (Define initial variable)   // First value is a variable and another is method

  
  const addValue = () => {
    // setCounter(counter+1)

    setCounter((prevCtr => prevCtr+1)); // To avoid bundling and to make sure that prevCtr is getting updated state as we used a callback which will makesure that a state is returned after execution
    setCounter((prevCtr => prevCtr+1));
    setCounter((prevCtr => prevCtr+1));
    // count = count+1;
    // console.log(count); 
  }

  const removeValue = () => {
    setCounter(counter-1);
  }
  return (
    <>
      <h1>React Course {counter}</h1>
      <h2> Counter Value : {counter}</h2>
      <button onClick = {addValue}> Add Value  </button>{"       "}
      <button onClick = {removeValue}> Remove Value  </button>
      <p> footer : </p>
    </>
  )
}

export default App
