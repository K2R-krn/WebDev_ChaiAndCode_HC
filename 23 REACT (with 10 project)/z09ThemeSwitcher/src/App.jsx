import React,{ useEffect, useState } from 'react'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'
import { ThemeProvider } from './contexts/theme'

function App() {

  
  const [themeMode, setThemeMode] = useState('light')

  // Changing state
  const darkTheme = ()=>{
    setThemeMode('dark')
  }
  const lightTheme = ()=>{
    setThemeMode('light')
  }
  // Just changing state wont make any difference so we want that change to reflext also so 
  // We create a useEffect which on it will actually change the state

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add('themeMode')
  }, [themeMode])


  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeButton />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App
