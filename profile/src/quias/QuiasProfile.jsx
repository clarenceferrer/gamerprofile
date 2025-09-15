// src/QuiasProfile.jsx
import React, { useState, useMemo } from "react";
import "./QuiasProfile.css";
import { Link } from 'react-router-dom';

import {
  FaFacebook,
  FaInstagram,
  FaDiscord,
  FaTwitch,
} from "react-icons/fa";


const badge1 = "/ach1.png";
const badge2 = "/ach2.jpg";
const badge3 = "/ach3.jpg";
const badge4 = "/ach4.jpg";
const badge5 = "/ach5.jpg";
const badge6 = "/ach6.jpg";
const badge7 = "/ach7.jpg";
const badge8 = "/ach8.png";
const badge9 = "/ach9.jpg";
const badge10 = "/ach10.jpg";

const game1 = "/genshin1.jpg";
const game2 = "/call.jpg";
const game3 = "/star.png";
const game4 = "/hok.png";
const game5 = "/lol.png";
const game6 = "/manor.png";
const game7 = "/rocket.png";
const game8 = "/asphalt.jpg";
const game9 = "/rise.png";
const game10 = "/kahoot.jpg";

const GAME_ACHIEVEMENTS_IMAGES = {
  "Genshin Impact": badge1,
  "Call of Duty: Mobile": badge2,
  "Stardew Valley": badge3,
  "Honor of Kings": badge4,
  "League of Legends": badge5,
  "Mystery Manor: Hidden Objects": badge6,
  "Rocket League Sideswipe": badge7,
  "Asphalt Legends": badge8,
  "Rise of Kingdoms": badge9,
  "Kahoot!": badge10,
};

const ALL_GAMES = [
  { id: 1, title: "Genshin Impact", category: "Adventure", img: game1, plays: 42 },
  { id: 2, title: "Call of Duty: Mobile", category: "Shooting", img: game2, plays: 77 },
  { id: 3, title: "Stardew Valley", category: "Paid", img: game3, plays: 15 },
  { id: 4, title: "Honor of Kings", category: "Action", img: game4, plays: 61 },
  { id: 5, title: "League of Legends", category: "Action", img: game5, plays: 93 },
  { id: 6, title: "Mystery Manor: Hidden Objects", category: "Strategy", img: game6, plays: 5 },
  { id: 7, title: "Rocket League Sideswipe", category: "Sports", img: game7, plays: 18 },
  { id: 8, title: "Asphalt Legends", category: "Simulation", img: game8, plays: 26 },
  { id: 9, title: "Rise of Kingdoms", category: "Strategy", img: game9, plays: 34 },
  { id: 10, title: "Kahoot!", category: "Education", img: game10, plays: 12 },
];

const CATEGORIES = [
  "All",
  "Adventure",
  "Action",
  "Kids",
  "Education",
  "Paid",
  "Sports",
  "Shooting",
  "Strategy",
  "Simulation",
];

const GAME_ACHIEVEMENTS = {
  "Genshin Impact": "Honorary Knight",
  "Call of Duty: Mobile": "Top Sniper",
  "Stardew Valley": "Master Farmer",
  "Honor of Kings": "Tournament Winner",
  "League of Legends": "MVP Champion",
  "Mystery Manor: Hidden Objects": "Puzzle Solver",
  "Rocket League Sideswipe": "Goal Master",
  "Asphalt Legends": "Speed Demon",
  "Rise of Kingdoms": "Conqueror",
  "Kahoot!": "Quiz Master",
};

export default function QuiasProfile() {
  const [favSet, setFavSet] = useState(new Set());
  const [selectedCat, setSelectedCat] = useState("All");

  const games = useMemo(() => {
    if (selectedCat === "All") return ALL_GAMES;
    return ALL_GAMES.filter((g) => g.category === selectedCat);
  }, [selectedCat]);

  function toggleFav(id) {
    setFavSet((s) => {
      const copy = new Set(s);
      if (copy.has(id)) copy.delete(id);
      else copy.add(id);
      return copy;
    });
  }

  return (
    
    <div className="dashboard-root-quias">
      {/* Left Sidebar */}
      <aside className="left-sidebar-quias">
        <div className="brand-quias">
          <div className="brand-icon-quias">🎮</div>
          <div className="brand-title-quias">Andrei's playground</div>
        </div>

        <nav className="side-menu-quias">
          <button className="menu-item-quias active">Dashboard</button>
          <button className="menu-item-quias">Games</button>
          <button className="menu-item-quias">Feedback</button>
          <button className="menu-item-quias">Favorite</button>
          <button className="menu-item-quias">Tournaments</button>
        </nav>

        <div className="premium-box-quias">
          <div className="bolt-quias">⚡</div>
          <div className="premium-info-quias">Enjoy Full Premium Access</div>
          <button className="unlock-btn-quias">Unlock Now</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content-quias">
        {/* Topbar */}
        <header className="topbar-quias">
          <div className="search-wrap-quias">
            <input className="search-input-quias" placeholder="Search Now" />
          </div>

          <div className="top-actions-quias">
            <button className="icon-btn-quias" title="Notifications">🔔</button>
            <div className="profile-pill-quias">
              <img
                className="avatar-quias"
                alt="avatar"
                src={`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'></svg>`}
              />
              <span className="profile-name-quias">Andrei Quias</span>
              <button className="chev-quias">▾</button>
            </div>
          </div>
        </header>

        {/* Content Grid */}
        <div className="content-grid-quias">
          {/* Main column */}
          <section className="column-main">
            {/* Hero Banner */}
            <div className="hero-quias">
              <div className="hero-left-quias">
                <div className="tag">Live Online Games</div>
                <h2 className="hero-title-quias">Call of Duty: Warzone</h2>
                <div className="hero-meta-quias">
                  Playing: <strong>178+</strong> · Action
                </div>
              </div>

              <div className="hero-actions-quias">
                <button
                  className="btn-outline-quias"
                  onClick={() => alert("Added to favorites")}
                >
                  Add to Favorites
                </button>
                <button
                  className="btn-primary-quias"
                  onClick={() => alert("Launching Call of Duty: Warzone...")}
                >
                  Play Now
                </button>
              </div>
            </div>

            {/* Popular Games */}
            <div className="panel-quias">
              <div className="panel-header-quias">
                <h3>
                  Popular Games <span className="fire">🔥</span>
                </h3>
                <div className="category-row-quias">
                  {CATEGORIES.map((c) => (
                    <button
                      key={c}
                      className={`cat-btn-quias ${selectedCat === c ? "active" : ""}`}
                      onClick={() => setSelectedCat(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="games-grid-quias">
                {games.map((g) => (
                  <div key={g.id} className="game-card-quias">
                    <div className="game-art-quias">
                      {g.img ? (
                        <img src={g.img} alt={g.title} className="game-img-quias" />
                      ) : (
                        <div className="art-label">Upload your image</div>
                      )}
                    </div>

                    <div className="game-body-quias">
                      <div className="game-title-quias">{g.title}</div>
                      <div className="game-meta-quias">{g.category}</div>
                    </div>

                    <div className="card-bottom-quias">
                      <button
                        className={`fav-small-quias ${favSet.has(g.id) ? "is-fav" : ""}`}
                        onClick={() => toggleFav(g.id)}
                        title={favSet.has(g.id) ? "Remove favorite" : "Add favorite"}
                      >
                        {favSet.has(g.id) ? "♥" : "♡"}
                      </button>
                      <span className="play-count">🎮 Played {g.plays} times</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
                  <Link to="/" className="back-link" style={{ display: 'inline-block', margin: '16px 0', color: '#3498db', textDecoration: 'none', fontWeight: 'bold' }}>
                    ← Back to Home
                  </Link>

            {/* Recent Achievements */}
            <div className="achievements-section">
              <div className="panel-header">
                <h2>Recent Achievements 🏆</h2>
              </div>

              <div className="achievements-grid">
                {games.map((g) => (
                  <div key={g.id} className="achievement-card">
                    <div className="game-art">
                      {GAME_ACHIEVEMENTS_IMAGES[g.title] ? (
                        <img
                          src={GAME_ACHIEVEMENTS_IMAGES[g.title]}
                          alt={g.title}
                          className="game-img"
                        />
                      ) : (
                        <div className="art-label">No Image</div>
                      )}
                    </div>

                    <div className="game-body">
                      <div className="game-title">{g.title}</div>
                      <div className="game-meta">
                        {GAME_ACHIEVEMENTS[g.title] || "No achievement yet"}
                      </div>
                    </div>

                    <div className="card-bottom">
                      <span className="play-count">🎉 Achievement Unlocked</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Right column */}
          <aside className="column-right">
            {/* About Me */}
            <div className="about-card">
              <h4>About Me</h4>
              <p>
                Hi! I'm Andrei, a passionate gamer who enjoys mobile games and PC games,
                strategy battles, and exploring new adventures. Always ready for
                tournaments and team-ups!
              </p>
              {/* Social Links */}
              <div className="social-links">
                <a href="https://www.facebook.com/andrei.quias/" target="_blank" rel="noreferrer">
                  <FaFacebook /> Facebook
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  <FaInstagram /> Instagram
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  <FaDiscord /> Discord
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  <FaTwitch /> Twitch
                </a>
              </div>
            </div>

            <div className="promo-card">
              <div className="promo-title">Invite Your Friend</div>
              <div className="promo-sub">Get 1 Month Unlimited Access</div>
              <div className="promo-code">q1tfffa... (code)</div>
              <button className="promo-cta">Copy Code</button>
            </div>

            <div className="achievements-card">
              <h4>Achievements</h4>
              <div className="ach-list">
                <div className="ach">🎮 Hall of Fame</div>
                <div className="ach">🏆 Legendary Achievements</div>
                <div className="ach">🎮 MVP of the Match</div>
                <div className="ach">💥 Godlike</div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
