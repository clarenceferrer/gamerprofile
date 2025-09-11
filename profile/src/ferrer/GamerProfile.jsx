import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './GamerProfile.css';

const GamerProfile = () => {
  const [selectedGame, setSelectedGame] = useState(0);
  const milestonesRef = useRef(null);
  const [milestonesMaxHeight, setMilestonesMaxHeight] = useState('none');
  const [isAnimating, setIsAnimating] = useState(false);

  // Measure the milestones list height and animate via max-height
  useEffect(() => {
    if (!milestonesRef.current) return;
    const nextHeight = milestonesRef.current.scrollHeight;
    // When selectedGame changes, we already locked previous height in the click handler.
    // Now animate to the new height.
    requestAnimationFrame(() => {
      setMilestonesMaxHeight(`${nextHeight}px`);
    });
  }, [selectedGame]);

  const handleSelectGame = (index) => {
    if (index === selectedGame) return;
    if (milestonesRef.current) {
      // Lock current height so shrinking also animates smoothly
      const currentHeight = milestonesRef.current.scrollHeight;
      setIsAnimating(true);
      setMilestonesMaxHeight(`${currentHeight}px`);
    }
    // Change the selected game on the next frame to allow the browser to register the locked height
    requestAnimationFrame(() => {
      setSelectedGame(index);
    });
  };
  
  const gamerData = {
    profilePicture: "/ferrer.png",
    ign: "FyuTa",
    realName: "Clarence Ferrer",
    games: [
      {
        name: "Valorant",
        image: "https://images.wallpapersden.com/image/download/valorant-character_a25uZW6UmZqaraWkpJRmaGVnrWZlZWU.jpg",
        milestones: [
          "Reached Ascendant 3",
          "1800+ competitive matches played",
          "Main agent: Killjoy with 200+ games",
          "Maintained 650+ tracker score in last 100 games",
          "Top 6% in Kill, Assist, Survived, Traded"
        ]
      },
      {
        name: "Mobile Legends",
        image: "https://tse1.mm.bing.net/th/id/OIP.HFGlICEk6PBgsM19tASxJwHaNl?r=0&cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        milestones: [
          "Reached Mythical Glory",
          "5000+ ranked matches completed",
          "Main role: EXP lane with 67% win rate",
          "Achieved 20+ kill streaks multiple times",
        ]
      },
      {
        name: "PUBG Mobile",
        image: "https://tse3.mm.bing.net/th/id/OIP.i5hNIKuy8mKCSO7RLlSYwgHaNK?r=0&cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        milestones: [
          "Reached Ace Tier (Ranked mode)",
          "600+ battle royale matches played",
          "Solo vs Squad specialist",
          "Achieved 20+ kill games multiple times",
          "Crown title holder (Season 6/Season 7)"
        ]
      },
      {
        name: "Rules of Survival",
        image: "https://cdn.technobezz.com/games/games/cover/rules-of-survival/rules-of-survival-cover-gamebezz-com.jpg",
        milestones: [
          "Reached Ace Tier",
          "600+ survival matches completed",
          "Sniper specialist with 2.5 K/D ratio",
          "Achieved 15+ kill games in solo mode",
        ]
      },
      {
        name: "Call of Duty: Modern Warfare 3 (PS3)",
        image: "https://wallpaperaccess.com/full/2361420.jpg",
        milestones: [
          "Achieved Prestige 3",
          "1000+ hours of gameplay logged",
          "Earned MOAB (25 killstreak)",
          "Achieved 30+ kill games in TDM",
          "Master of all weapon classes"
        ]
      }
    ]
  };

  return (
    <div className="gamer-profile">
      <div className="profile-content">
        <div className="profile-info">
          <Link to="/" className="back-arrow">←</Link>
          <img 
            src={gamerData.profilePicture}
            alt="Profile" 
            className="profile-picture"
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/ferrer.jpg"; }}
          />
          <div className="profile-details">
            <h2 className="ign">{gamerData.ign}</h2>
            <p className="real-name">{gamerData.realName}</p>
          </div>
        </div>

        <div className="games-section">
          <h3>Gaming Achievements</h3>
          <div className="games-container">
            <div className="achievements-panel">
              <h4 className="selected-game-name">{gamerData.games[selectedGame].name}</h4>
              <ul
                className="milestones"
                ref={milestonesRef}
                style={{ maxHeight: milestonesMaxHeight }}
                onTransitionEnd={() => {
                  // After the animation, remove max-height restriction
                  setIsAnimating(false);
                  setMilestonesMaxHeight('none');
                }}
              >
                {gamerData.games[selectedGame].milestones.map((milestone, milestoneIndex) => (
                  <li key={`${selectedGame}-${milestoneIndex}`} className="milestone" style={{ animationDelay: `${milestoneIndex * 0.1}s` }}>
                    {milestone}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="game-cards-container">
              {gamerData.games.map((game, index) => (
                <div 
                  key={index} 
                  className={`game-card ${selectedGame === index ? 'active' : ''} ${index < selectedGame ? 'left' : index > selectedGame ? 'right' : ''}`}
                  onClick={() => handleSelectGame(index)}
                  style={{ zIndex: selectedGame === index ? 10 : gamerData.games.length - Math.abs(index - selectedGame) }}
                >
                  <img src={game.image} alt={game.name} className="game-image" />
                  <div className="game-overlay">
                    <h4 className="game-name">{game.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamerProfile;

