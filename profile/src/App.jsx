import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import GamerProfile from './ferrer/GamerProfile'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/gamer-profile" element={<GamerProfile />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App