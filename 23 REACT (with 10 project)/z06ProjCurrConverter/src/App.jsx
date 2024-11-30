import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'
import {InputBox} from './components/index.js'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmt, setConvertedAmt] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo) // Keys which comes form the list of JSON 
  
  // SWAP BUTTON // JUST EXCHANGING from and to
  const swap = () =>{
    setFrom(to)
    setTo(from)
    setConvertedAmt(amount)
    setAmount(convertedAmt)
  }


  // TO GRAB INR FORM THAT LIST
  const convert = () => {
    setConvertedAmt(amount * currencyInfo[to])
  }

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" style={{backgroundImage: `url(https://plus.unsplash.com/premium_photo-1679397743724-b94e80b89005?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox 
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={ (currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency= {from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                      onClick={swap}>Swap</button>
            </div>
            <div className='w-full mb-1'>
              <InputBox 
                label="to"
                currencyOptions={options}
                amount={convertedAmt}
                onCurrencyChange={ (currency) => setTo(currency)}
                selectedCurrency= {to}
                amountDisabled
                // onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'> Convert {from.toUpperCase()} to {to.toUpperCase()} </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
