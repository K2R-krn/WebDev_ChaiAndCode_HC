import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const[color, setColor] = useState('maroon') 
  // function changeColor(color){
  //   setColor(color)
  // }
  return (
    <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          {/* <button onClick={()=> changeColor('orange')} className='outline-none px-4 py-1 rounded-full text shadow-lg text-black'>Orange</button>
          <button onClick={()=> changeColor('aqua')} className='outline-none px-4 py-1 rounded-full text shadow-lg text-black'>Aqua</button> */}
          <button onClick={()=> setColor('orange')} 
                  className='outline-none px-4 py-1 rounded-full text shadow-lg text-black'
                  style={{backgroundColor: 'orange'}}>
                  Orange</button>
          <button onClick={()=> setColor('aqua')} 
                  className='outline-none px-4 py-1 rounded-full text shadow-lg text-black'
                  style={{backgroundColor: 'aqua'}}>
                  Aqua</button>
          <button onClick={()=> setColor('purple')}
                  className='outline-none px-4 py-1 rounded-full text shadow-lg text-black'
                  style={{backgroundColor: 'purple'}}>
                  Purple</button>
          <button onClick={()=> setColor('violet')}
                  className='outline-none px-4 py-1 rounded-full text shadow-lg text-black'
                  style={{backgroundColor:'violet'}}>
                  violet</button>
        </div>
      </div>
    </div>
  )
}

export default App
