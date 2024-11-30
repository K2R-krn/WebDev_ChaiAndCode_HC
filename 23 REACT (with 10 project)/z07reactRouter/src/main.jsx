
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import Contact from './components/ContactUs/ContactUs.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    // Sandwiching  -  One thing can be inside the other
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />

      <Route path='user/' element={<User />}>
        <Route path=':userId' element={<User />}/>
      </Route>

      <Route path='github' 
             loader= {githubInfoLoader}
             element={<Github/>} />

      <Route path='*' element={<div> ELEMENT NOT FOUND</div>} />


    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)