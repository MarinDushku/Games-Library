import React, { useState, useRef } from 'react';
import { friv2024GameData } from './playnowdata.js';
import './playnow.css';


export default function PlayNow() {
  const [hoveredGame, setHoveredGame] = useState(null);
  const [trailerPosition, setTrailerPosition] = useState({ x: 0, y: 0 });
  const hoverTimeoutRef = useRef(null);

  const handleGameHover = (game, event) => {
    clearTimeout(hoverTimeoutRef.current);
    
    hoverTimeoutRef.current = setTimeout(() => {
      const rect = event.target.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const popupWidth = 450;
      
      let xPosition = rect.right + 20;
      
      // Adjust position if popup would go off screen
      if (xPosition + popupWidth > windowWidth) {
        xPosition = rect.left - popupWidth - 20;
      }
      
      // Ensure popup doesn't go off left edge
      if (xPosition < 10) {
        xPosition = 10;
      }
      
      setTrailerPosition({
        x: xPosition,
        y: Math.max(10, rect.top - 50)
      });
      setHoveredGame(game);
<<<<<<< Updated upstream
    }, 300);
=======
    }, 5); // 500ms delay before showing trailer
>>>>>>> Stashed changes
  };

  const handleGameLeave = () => {
    clearTimeout(hoverTimeoutRef.current);
    setHoveredGame(null);
  };

  const handleGameClick = (gameUrl) => {
    window.open(gameUrl, '_blank');
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }
    
    return stars;
  };

  const getTrailerUrl = (trailer) => {
    // Handle different YouTube URL formats and add autoplay parameters
    let videoId = '';
    
    if (trailer.includes('youtube.com/embed/')) {
      // Already an embed URL
      videoId = trailer.split('/embed/')[1]?.split('?')[0];
    } else if (trailer.includes('youtube.com/watch')) {
      // Regular YouTube URL
      videoId = trailer.split('v=')[1]?.split('&')[0];
    } else if (trailer.includes('youtu.be/')) {
      // Short YouTube URL
      videoId = trailer.split('youtu.be/')[1]?.split('?')[0];
    }
    
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&enablejsapi=1&playsinline=1&start=0`;
    }
    
    return trailer;
  };

  return (
    <div className="play-now-container">
      <div className="header-section">
        <h1 className="page-title">MOST PLAYED FRIV GAMES</h1>
        <div className="filter-section">
          <span className="games-count">Top {friv2024GameData.length} played games</span>
          <select className="filter-dropdown">
            <option>By Current Players</option>
            <option>By Rating</option>
            <option>By Trending</option>
          </select>
        </div>
      </div>

      <div className="games-table">
        <div className="table-header">
          <div className="rank-col">RANK</div>
          <div className="game-col">GAME</div>
          <div className="category-col">CATEGORY</div>
          <div className="players-col">CURRENT PLAYERS</div>
          <div className="rating-col">RATING</div>
        </div>

        {friv2024GameData.map((game, index) => (
          <div 
            key={game.id}
            className={`game-row ${hoveredGame?.id === game.id ? 'hovered' : ''}`}
            onMouseEnter={(e) => handleGameHover(game, e)}
            onMouseLeave={handleGameLeave}
            onClick={() => handleGameClick(game.gameUrl)}
          >
            <div className="rank-col">
              <span className="rank-number">{index + 1}</span>
            </div>
            
            <div className="game-col">
              <div className="game-info">
                <img 
                  src={game.thumbnail} 
                  alt={game.title}
                  className="game-thumbnail"
                />
                <div className="game-details">
                  <h3 className="game-title">
                    {game.title}
                    {game.trending && <span className="trending-badge">🔥</span>}
                  </h3>
                  <p className="game-description">{game.description}</p>
                </div>
              </div>
            </div>
            
            <div className="category-col">
              <span className="category-tag">{game.category}</span>
            </div>
            
            <div className="players-col">
              <span className="player-count">{game.players}</span>
            </div>
            
            <div className="rating-col">
              <div className="rating-stars">
                {renderStars(game.rating)}
                <span className="rating-number">({game.rating})</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Hover Trailer Popup */}
      {hoveredGame && (
        <div 
          className="trailer-popup"
          style={{
            left: trailerPosition.x,
            top: trailerPosition.y
          }}
        >
          <div className="trailer-content">
            <div className="trailer-video-container">
              <iframe
                key={hoveredGame.id} // Force re-render when game changes
                src={getTrailerUrl(hoveredGame.trailer)}
                title={`${hoveredGame.title} trailer`}
                frameBorder="0"
                allow="autoplay; encrypted-media; fullscreen; accelerometer; gyroscope; picture-in-picture"
                allowFullScreen
                className="trailer-video"
              />
              <div className="video-overlay"></div>
              <div className="play-indicator">
                ▶ AUTO-PLAY
              </div>
            </div>
            <div className="trailer-info">
              <h4>{hoveredGame.title}</h4>
              <p>{hoveredGame.description}</p>
              <div className="trailer-meta">
                <span className="players">
                  👥 {hoveredGame.players} playing
                  <span className="live-badge">LIVE</span>
                </span>
                <div className="rating">
                  {renderStars(hoveredGame.rating)}
                  <span>({hoveredGame.rating})</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}