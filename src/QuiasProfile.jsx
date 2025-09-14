// src/QuiasProfile.jsx
import React, { useState, useMemo } from "react";
import "./QuiasProfile.css";
import {
  FaFacebook,
  FaInstagram,
  FaDiscord,
  FaTwitch,
} from "react-icons/fa";

import badge1 from "./assets/ach1.png";
import badge2 from "./assets/ach2.jpg";
import badge3 from "./assets/ach3.jpg";
import badge4 from "./assets/ach4.jpg";
import badge5 from "./assets/ach5.jpg"; // fixed typo
import badge6 from "./assets/ach6.jpg";
import badge7 from "./assets/ach7.jpg";
import badge8 from "./assets/ach8.png";
import badge9 from "./assets/ach9.jpg";
import badge10 from "./assets/ach10.jpg";

import game1 from "./assets/genshin.jpg";
import game2 from "./assets/call.jpg";
import game3 from "./assets/star.png";
import game4 from "./assets/hok.png";
import game5 from "./assets/lol.png";
import game6 from "./assets/manor.png";
import game7 from "./assets/rocket.png";
import game8 from "./assets/asphalt.jpg";
import game9 from "./assets/rise.png";
import game10 from "./assets/kahoot.jpg";

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
    <div className="dashboard-root">
      {/* Left Sidebar */}
      <aside className="left-sidebar">
        <div className="brand">
          <div className="brand-icon">🎮</div>
          <div className="brand-title">Andrei's playground</div>
        </div>

        <nav className="side-menu">
          <button className="menu-item active">Dashboard</button>
          <button className="menu-item">Games</button>
          <button className="menu-item">Feedback</button>
          <button className="menu-item">Favorite</button>
          <button className="menu-item">Tournaments</button>
        </nav>

        <div className="premium-box">
          <div className="bolt">⚡</div>
          <div className="premium-info">Enjoy Full Premium Access</div>
          <button className="unlock-btn">Unlock Now</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Topbar */}
        <header className="topbar">
          <div className="search-wrap">
            <input className="search-input" placeholder="Search Now" />
          </div>

          <div className="top-actions">
            <button className="icon-btn" title="Notifications">🔔</button>
            <div className="profile-pill">
              <img
                className="avatar"
                alt="avatar"
                src={`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'></svg>`}
              />
              <span className="profile-name">Andrei Quias</span>
              <button className="chev">▾</button>
            </div>
          </div>
        </header>

        {/* Content Grid */}
        <div className="content-grid">
          {/* Main column */}
          <section className="column-main">
            {/* Hero Banner */}
            <div className="hero">
              <div className="hero-left">
                <div className="tag">Live Online Games</div>
                <h2 className="hero-title">Call of Duty: Warzone</h2>
                <div className="hero-meta">
                  Playing: <strong>178+</strong> · Action
                </div>
              </div>

              <div className="hero-actions">
                <button
                  className="btn-outline"
                  onClick={() => alert("Added to favorites")}
                >
                  Add to Favorites
                </button>
                <button
                  className="btn-primary"
                  onClick={() => alert("Launching Call of Duty: Warzone...")}
                >
                  Play Now
                </button>
              </div>
            </div>

            {/* Popular Games */}
            <div className="panel">
              <div className="panel-header">
                <h3>
                  Popular Games <span className="fire">🔥</span>
                </h3>
                <div className="category-row">
                  {CATEGORIES.map((c) => (
                    <button
                      key={c}
                      className={`cat-btn ${selectedCat === c ? "active" : ""}`}
                      onClick={() => setSelectedCat(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="games-grid">
                {games.map((g) => (
                  <div key={g.id} className="game-card">
                    <div className="game-art">
                      {g.img ? (
                        <img src={g.img} alt={g.title} className="game-img" />
                      ) : (
                        <div className="art-label">Upload your image</div>
                      )}
                    </div>

                    <div className="game-body">
                      <div className="game-title">{g.title}</div>
                      <div className="game-meta">{g.category}</div>
                    </div>

                    <div className="card-bottom">
                      <button
                        className={`fav-small ${favSet.has(g.id) ? "is-fav" : ""}`}
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
