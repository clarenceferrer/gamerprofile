import React, { useState } from 'react';
import './KlyeProfile.css';
import klyrProfile from '../assets/klyrProfile.jpg';

const TeamLogo = ({ companyName, icon = "👑", className = "" }) => (
  <div className={`logo-section ${className}`}>
    <div className="logo-icon">{icon}</div>
    <div className="company-name">{companyName}</div>
  </div>
);

const ProfileSection = ({ realName, ign, isOnline }) => (
  <div className="profile-section">
    <div className="profile-avatar">
      <img 
        src={klyrProfile} 
        alt={`${realName}'s avatar`} 
        className="avatar-photo" 
      />
    </div>
    <div className="real-name">{realName}</div>
    <div className="ign">@{ign}</div>
    {isOnline && (
      <div className="status-badge">
        <div className="status-dot"></div>
        Online
      </div>
    )}
  </div>
);

const GameCard = ({ game, showRank }) => (
  <div className="game-item">
    <div className="game-icon" style={{ background: game.color }}>🎮</div>
    <div className="game-info">
      <h4>{game.name}</h4>
      <div className="game-hours">{game.hours} hours played</div>
      {showRank && game.rank && <div className="game-rank">{game.rank}</div>}
    </div>
  </div>
);

const MilestoneCard = ({ milestone, showDate }) => {
  const icons = {
    tournament: '🏆',
    achievement: '🏅',
    rank: '⭐',
    stream: '⚡',
    team: '🎯',
    stats: '📈',
  };
  return (
    <div className="milestone-item">
      <div className="milestone-icon">{icons[milestone.type] || '🏆'}</div>
      <div className="milestone-title">{milestone.title}</div>
      <div className="milestone-desc">{milestone.description}</div>
      {showDate && <div className="milestone-date">{milestone.date}</div>}
    </div>
  );
};

const StatsCard = ({ stats }) => (
  <div className="stats-container">
    <div className="stat-item">
      <div className="stat-value">{stats.totalWins}</div>
      <div className="stat-label">Total Wins</div>
    </div>
    <div className="stat-item">
      <div className="stat-value">{stats.winRate}%</div>
      <div className="stat-label">Win Rate</div>
    </div>
    <div className="stat-item">
      <div className="stat-value">{stats.hoursPlayed}</div>
      <div className="stat-label">Hours Played</div>
    </div>
  </div>
);

const KlyeProfile = ({ profileData }) => {
  const [showRanks, setShowRanks] = useState(true);
  const [showDates, setShowDates] = useState(true);

  const { companyName, icon, className, realName, ign, isOnline, stats, games, milestones } = profileData;

  return (
    <div className="gaming-profile">
      <div className="profile-container">
        <div className="sidebar">
          <TeamLogo companyName={companyName} icon={icon} className={className} />
          <ProfileSection realName={realName} ign={ign} isOnline={isOnline} />
          <StatsCard stats={stats} />
        </div>
        <div className="main-content">
          <div className="card">
            <div className="card-header">
              <span className="card-icon">🎮</span>
              <h3 className="card-title">Current Games</h3>
            </div>
            <button className="toggle-button" onClick={() => setShowRanks(!showRanks)}>
              {showRanks ? 'Hide Ranks' : 'Show Ranks'}
            </button>
            <div className="games-grid">
              {games.map((game, index) => (
                <GameCard key={index} game={game} showRank={showRanks} />
              ))}
            </div>
          </div>
          <div className="card full-width">
            <div className="card-header">
              <span className="card-icon">🏆</span>
              <h3 className="card-title">Milestones & Achievements</h3>
            </div>
            <button className="toggle-button" onClick={() => setShowDates(!showDates)}>
              {showDates ? 'Hide Dates' : 'Show Dates'}
            </button>
            <div className="milestones-grid">
              {milestones.map((milestone, index) => (
                <MilestoneCard key={index} milestone={milestone} showDate={showDates} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KlyeProfile;

