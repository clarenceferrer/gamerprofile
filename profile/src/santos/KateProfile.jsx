import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './KateProfile.css';

const KateProfile = () => {
  const [selectedGame, setSelectedGame] = useState(0);
  const milestonesRef = useRef(null);
  const [selectedCard, setSelectedCard] = useState(null);

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
    ign: "Kalea",
    realName: "Kate Cristen Santos",
    games: [
      {
        name: "Mobile Legends",
        image: "https://tse1.mm.bing.net/th/id/OIP.HFGlICEk6PBgsM19tASxJwHaNl",
        milestones: [
          "Highest rank: Mythical Immortal",
          "Stars: 107 Stars",
          "Main role: Mid/Roam",
          "Main hero: Novaria"
        ]
      },
      {
        name: "Valorant",
        image: "https://images.wallpapersden.com/image/download/valorant-character_a25uZW6UmZqaraWkpJRmaGVnrWZlZWU.jpg",
        milestones: [
          "Highest Peak: Gold 3",
          "Main Role: Controller" ,
          "Played Since: 2020",
          "Favorite Agent: Clove"
        ]
      },
      {
        name: "Call of Duty: Mobile",
        image: "codm.jpeg",
        milestones: [
          "Reached Legendary 3 times",
          "Main Mode: Multiplayer ",
          "Favorite Weapon: KRM-262",
          "Favorite Mode: Search and Destroy"
        ]
      },
      {
        name: "Blockblast",
        image: "blockblast.jpg",
        milestones: [
          "High Score: 40,210",
          "Played Since: 2023",
          "Favorite Mode: Classic",
    ]
      },
      {
        name: "Honor of Kings",
        image: "hok.jpg",
        milestones: [
          "Achieved Gold Rank",
          "Main Role: Support",
          "Main Hero: Cai Yan",
          "Played Since: 2025",
        ]
      }
    ]
  };
   const handleCardClick = (index) => {
    setSelectedCard(selectedCard === index ? null : index);
  };
  return (
    <div className="kate-profile">
      <div className="header-profile">
        <h1 className="page-title">Welcome to Kalea's Gaming Profile</h1>

        <div className="header-info"> 
          <div className="back">
            <Link to="/">←</Link>
          </div>
          <div className="profilecontainer">
            <img 
              src="kate.jpg"
              alt="Kate Santos"
              className="profile-image"
            />
          </div>

          <div className="details">
            <h2 className="ingame-name">{gamerData.ign}</h2>
            <p className="name">{gamerData.realName}</p>
          </div>
        </div>
        <div className="games">
          <h3>Games</h3>
   <div className="gamescontainer">
      {gamerData.games.map((game, index) => (
        <div 
          key={game.name} 
          className={`gamecard ${selectedCard === index ? 'is-flipped' : ''}`}
          onClick={() => handleCardClick(index)}
        >
          <div className="card-inner">
            <div className="card-front">
              <div className="gameimagecontainer">
                <img 
                  src={game.image} 
                  alt={game.name} 
                  className="gameimage"
                  onError={(e) => {
                    e.target.src = 'fallback-image.jpg';
                  }}
                />
              </div>
              <h4 className="gametitle">{game.name}</h4>
            </div>
            <div className="card-back">
              <h4 className="gametitle">{game.name}</h4>
              <div className="achievements">
                <ul>
                  {game.milestones.map((milestone, i) => (
                    <li key={i}>{milestone}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bottom"></div>
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>
              <p className="clickprompt">Click the card to view milestones</p>
            </div>
);
}
export default KateProfile;