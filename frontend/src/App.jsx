import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Logo from './components/Logo'
import { LandingPage } from './pages/LandingPage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from './pages/Login'
import SignUpPage from './pages/Signup'
import DashboardPage from './pages/DashboardPage'
// import DashboardPage from './pages/DashboardPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/* <LandingPage/> */}
  <Router>
    <Routes>
      <Route path="/landing" element={<LandingPage />} />
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
      <Route path='/dashboard' element={<DashboardPage/>} />
    </Routes>
  </Router>
    </>
  )
}

export default App
