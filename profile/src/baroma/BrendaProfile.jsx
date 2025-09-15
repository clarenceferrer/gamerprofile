// BrendaProfile.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './BrendaProfile.css';

const BrendaProfile = () => {
  const [selectedGame, setSelectedGame] = useState(0);
  const milestonesRef = useRef(null);
  const [milestonesMaxHeight, setMilestonesMaxHeight] = useState('none');

  const gamerData = {
    profilePicture: "/brenda.jpeg",
    ign: "breabxbe",
    realName: "Brenda Baroma",
    games: [
      { name: "Genshin Impact", 
        image: "/genshin.jpg", 
        milestones: ["Adventure Rank 58", "Cleared Spiral Abyss 36⭐", "678 Achievements", "Owned 29 Five-Star Characters"] 
    },
      { name: "FNaF: Security Breach", 
        image: "/fnaf.jpeg", 
        milestones: ["Completed main story", "Survived animatronic hunts", "Favorite: Glamrock Chica"] 
    },
      { name: "Resident Evil Village", 
        image: "/resident.png", 
        milestones: ["Beat story on Hardcore", "Defeated Lady Dimitrescu", "S+ Rank on Village of Shadows"] 
    },
      { name: "Omori", 
        image: "/omori.jpg", 
        milestones: ["Finished both Sunny & Omori routes", "Unlocked secret endings", "Explored all dream worlds"] 
    },
      { name: "Roblox", 
        image: "/mimic.jpg", 
        milestones: ["Completed The Mimic Chapters 1–4", "Survived 378 nights", "Active since 2016"] }
    ]
  };

  useEffect(() => {
    if (!milestonesRef.current) return;
    const nextHeight = milestonesRef.current.scrollHeight;
    requestAnimationFrame(() => {
      setMilestonesMaxHeight(`${nextHeight}px`);
    });
  }, [selectedGame]);

  const handleSelectGame = (index) => {
    if (index < 0) index = 0;
    if (index >= gamerData.games.length) index = gamerData.games.length - 1;
    setSelectedGame(index);
  };

  return (
    <div className="brenda-profile">
      <div className="profile-content">
        {/* Profile section */}
        <div className="brenda_profile-info">
          <Link to="/" className="b-back-arrow">←</Link>
          <img 
            src={gamerData.profilePicture}
            alt="Profile" 
            className="b-profile-picture"
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/default-profile.jpg"; }}
          />
          <div className="profile-details">
            <h2 className="b-ign">{gamerData.ign}</h2>
            <p className="real-name">{gamerData.realName}</p>
          </div>
        </div>

        {/* Games Section */}
        <div className="games-section">
          <h3 className="b-gaming_achi">Gaming Achievements</h3>

          {/* Carousel */}
          <div className="carousel-wrapper">
            <button className="carousel-btn left" onClick={() => handleSelectGame(selectedGame - 1)}>‹</button>

            <div className="carousel-cards">
              {gamerData.games.map((game, index) => {
                let className = "carousel-card";
                if (index === selectedGame) className += " active";
                else if (index < selectedGame) className += " left";
                else className += " right";

                return (
                  <div
                    key={index}
                    className={className}
                    style={{ zIndex: index === selectedGame ? 10 : gamerData.games.length - Math.abs(index - selectedGame) }}
                    onClick={() => handleSelectGame(index)} // clickable entire card
                  >
                    <img src={game.image} alt={game.name} className="game-image" />
                    <div className="game-overlay">
                      <h4 className="b-game-name">{game.name}</h4>
                    </div>
                  </div>
                )
              })}
            </div>

            <button className="carousel-btn right" onClick={() => handleSelectGame(selectedGame + 1)}>›</button>
          </div>

          {/* Achievements Info */}
          <div className="b-achievements-panel">
            <h4 className="selected-game-name">{gamerData.games[selectedGame].name}</h4>
            <ul
              className="milestones"
              ref={milestonesRef}
              style={{ maxHeight: milestonesMaxHeight }}
              onTransitionEnd={() => setMilestonesMaxHeight('none')}
            >
              {gamerData.games[selectedGame].milestones.map((milestone, i) => (
                <li key={`${selectedGame}-${i}`} className="milestone" style={{ animationDelay: `${i * 0.1}s` }}>
                  {milestone}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrendaProfile;
