import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'> Vite with Tailwind</h1>
      <Card userName = "Karansinh Rathod" post="CEO" location="Hamburg, Germany"/>
      <Card userName = "Krishna Poddar" post='CFO' location="Paris, France"/>
      <Card userName = "Atul Ranjan" post="CTO" location="Reykjavik, Iceland"/>
      <Card />
      
    </>
  )
}

export default App
