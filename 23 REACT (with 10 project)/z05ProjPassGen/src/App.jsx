import { useState, useCallback, useEffect, useRef, useReducer } from 'react'

function App() {

  const[length, setLength] = useState(8);
  const[numberAllowed, setNumberAllowed] = useState(false);
  const[charAllowed, setcharAllowed] = useState(false);
  const[password, setPassword] = useState('');

  const generatePass = useCallback(() => {
     let pass = "";
     let str = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm";

     if(numberAllowed) str+="0123456789"
     if(charAllowed) str+="!@#$%^&*()_+"

     for(let i = 1;i<length;i++){
        const char = Math.floor(Math.random() * str.length + 1)
        pass+= str.charAt(char);
     }

     setPassword(pass)
  }, [length, numberAllowed, charAllowed])
  

  useEffect(() => {
    generatePass()
  }, [length, numberAllowed, charAllowed ])



  const copyPasswordToClip = () => {
    window.navigator.clipboard.writeText(password); 
    passRef.current?.select()
  }

  const passRef = useRef(null)
  return (
    <div className='overflow-x-hidden h-screen' style={{backgroundImage: `url(https://plus.unsplash.com/premium_photo-1675329253568-447ff9cc04a3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}}>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 backdrop-blur-2xl text-orange-500'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          ref={passRef}
          readOnly 
          ></input>
          <button onClick={copyPasswordToClip} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'> copy </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex text-sm gap-x-2'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => setLength(e.target.value)} name="" id=""></input>
            <label htmlFor='length'>Length: {length} </label>
          </div>

          <div className='flex text-sm gap-x-2'>
            <input type="checkbox" defaultChecked={numberAllowed} onChange={() => {setNumberAllowed((prev) => !prev)}} name="" id=""></input>  {/*Using a callback here in order to make sure react do react on click everytime even if its very fast*/}
            <label htmlFor='number'>Numbers </label>
          </div>

          <div className='flex text-sm gap-x-2'>
            <input type="checkbox" defaultChecked={charAllowed} onChange={() => {setcharAllowed((prev) => !prev)}} name="" id=""></input>  {/*Using a callback here in order to make sure react do react on click everytime even if its very fast*/}
            <label htmlFor='clearInput'>Character </label>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default App
