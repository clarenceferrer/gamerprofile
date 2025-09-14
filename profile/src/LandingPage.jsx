import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showProfiles] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing-page">
      <div className="hero-section">
        <img className="hero-logo" src="/logo.png" alt="Achuchu Gaming Logo" />
        <h1 className="hero-title">AltF4ce</h1>
        <p className="hero-subtitle">Exit for Them, Glory for Us.</p>
        
        {isLoading && (
          <div className="hero-state loading-state">Loading profiles…</div>
        )}

        {!isLoading && !showProfiles && (
          <div className="hero-state empty-state">No profiles available right now.</div>
        )}

        {!isLoading && showProfiles && (
          <div className="cards-overlap">
            <div className="gamer-cards-container">
              <div className="gamer-cards-grid-1">
                <Link to="/sierra" className="gamer-card-link">
                  <div className="gamer-card">
                    <div className="player-image">
                      <img 
                      src="/klye.jpg" 
                      alt="Fatima Klye Sierra" 
                      onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/klye.jpg"; }}
                    />
                  </div>
                  <h3>Klye</h3>
                    <p>Fatima Klye Sierra</p>
                  </div>
                </Link>
                <Link to="/kate-profile" className="gamer-card-link">
                  <div className="gamer-card">
                    <div className="player-image">
                      <img src="/kate.jpg" alt="Kate Santos" />
                    </div>
                    <h3>Kalea</h3>
                    <p>Kate Santos</p>
                  </div>
                </Link>
                <Link to="/baroma" className="gamer-card-link">
                  <div className="gamer-card">
                    <div className="player-image">
                      <img src="/api/placeholder/200/200" alt="Brenda Baroma" />
                    </div>
                    <h3>Baroma</h3>
                    <p>Brenda Baroma</p>
                  </div>
                </Link>
              </div>
              
              <div className="gamer-cards-grid-2">
                <Link to="/quias" className="gamer-card-link">
                  <div className="gamer-card">
                    <div className="player-image">
                      <img src="/api/placeholder/200/200" alt="Andrei Quias" />
                    </div>
                    <h3>Quias</h3>
                    <p>Andrei Quias</p>
                  </div>
                </Link>
                <Link to="/gamer-profile" className="gamer-card-link">
                  <div className="gamer-card">
                    <div className="player-image">
                      <img 
                        src="/ferrer.png" 
                        alt="Clarence Ferrer" 
                        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/ferrer.jpg"; }}
                      />
                    </div>
                    <h3>FyuTa</h3>
                    <p>Clarence Ferrer</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="content-section" />
    </div>
  );
};

export default LandingPage;

