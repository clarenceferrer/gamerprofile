import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import GamerProfile from './ferrer/GamerProfile';
import KateProfile from './santos/KateProfile';
import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/gamer-profile" element={<GamerProfile />} />
          <Route path="/kate-profile" element={<KateProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
