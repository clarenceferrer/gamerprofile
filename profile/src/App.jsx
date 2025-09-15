import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import GamerProfile from './ferrer/GamerProfile';
import KateProfile from './santos/KateProfile';
import KlyeProfile from './sierra/KlyeProfile';
import BrendaProfile from './baroma/BrendaProfile'; 
import QuiasProfile from './quias/QuiasProfile';
import './App.css';

function App() {
  
  const profileData = {
    companyName: "Klye Gaming Profile",
    icon: "🎮",
    className: "highlight-logo",
    realName: "Fatima Klye Sierra",
    ign: "Klye",
    isOnline: true,
    stats: {
      totalWins: 10025,
      winRate: 89,
      hoursPlayed: 2600,
    },
    games: [
      { name: "Valorant", hours: 850, image: "valorant.webp", rank: "Bronze 2", color: "linear-gradient(135deg, #ff4655, #ec4899, #f0e6d2)" },
      { name: "Call of Duty: Mobile", hours: 650, image: "codm.jpeg", rank: "Legendary", color: "linear-gradient(135deg, #c89b3c, #f0e6d2)" },
      { name: "Mobile Legends", hours: 420, image: "mlbb.jpeg", rank: "Legend", color: "linear-gradient(135deg, #ff6600, #ff8c00)" },
      { name: "Honor of Kings", hours: 380, image: "hok.jpg", rank: "Grandmaster", color: "linear-gradient(135deg, #f4a261, #e76f51)" },
      { name: "Roblox", hours: 290, image: "roblox.jpg", rank: "Cute", color: "linear-gradient(135deg, #f99e1a, #ff8c00)" },
    ],
    milestones: [
      { type: "tournament", title: "CODM 1st Place", description: "Won a Call of Duty Mobile tournament", date: "March 2024" },
      { type: "tournament", title: "ML Tournament", description: "Secured third place in a Mobile Legends tournament", date: "March 2024" },
      { type: "rank", title: "ML Legend", description: "Reached 140 stars in Mobile Legends", date: "February 2024" },
      { type: "stream", title: "Content Creator", description: "Achieved 1.4k followers milestone", date: "January 2024" },
      { type: "stream", title: "HoK Content Creator", description: "Gained a following as an Honor of Kings content creator", date: "January 2024" },
      { type: "stats", title: "Top Fragger", description: "Recorded the most kills in a tournament", date: "December 2023" },
      { type: "achievement", title: "Best Support", description: "Recognized as the best support player", date: "November 2023" },
      { type: "rank", title: "Honor of Kings Elite", description: "Achieved the highest rank in Honor of Kings", date: "October 2023" },
      { type: "achievement", title: "CODM Legendaries", description: "Achieved the 16x Legendary rank in Call of Duty Mobile", date: "October 2022" },
    ],
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/gamer-profile" element={<GamerProfile />} />
          <Route path="/kate-profile" element={<KateProfile />} />
          <Route path="/klye-profile" element={<KlyeProfile profileData={profileData} />} />
          <Route path="/brenda-profile" element={<BrendaProfile />} />
          <Route path="/quias-profile" element={<QuiasProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
