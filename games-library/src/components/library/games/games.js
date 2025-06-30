import { useState } from 'react';
import gamesData from './gamesdata.js'; 
import './games.css';

export default function Games({ selectedCategory }) { 
  const [selectedGame, setSelectedGame] = useState(null);

  const filteredGames = selectedCategory === 'All' || !selectedCategory
    ? gamesData 
    : gamesData.filter(game => game.category === selectedCategory); 

  const openGameDetails = (game) => {
    setSelectedGame(game);
  };

  const closeGameDetails = () => {
    setSelectedGame(null);
  };

  return (
    <div className="games-container">
      <div className="games-grid">
        {filteredGames.map(game => (
          <GameCard 
            key={game.id} 
            game={game} 
            onClick={() => openGameDetails(game)}
          />
        ))}
      </div>

      {selectedGame && (
        <GameModal 
          game={selectedGame} 
          onClose={closeGameDetails}
        />
      )}
    </div>
  );
}

function GameCard({ game, onClick }) {
  return (
    <div className="game-card" onClick={onClick}>
      <div className="game-image">
        <img src={game.image} alt={game.title} />
      </div>
      <div className="game-info">
        <h3 className="game-title">{game.title}</h3>
        <p className="game-category">{game.category}</p>
        <span className="free-badge">FREE</span>
      </div>
    </div>
  );
}

function GameModal({ game, onClose }) {
  return (
    <div className="game-modal-overlay" onClick={onClose}>
      <div className="game-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="modal-content">
          <img src={game.image} alt={game.title} className="modal-image" />
          
          <div className="modal-info">
            <h2>{game.title}</h2>
            <p className="game-description">{game.description}</p>
            <p><strong>Category:</strong> {game.category}</p>
            <p><strong>Size:</strong> {game.size}</p>
            <p><strong>Requirements:</strong> {game.requirements}</p>
            
            <a 
              href={game.downloadLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="download-btn"
            >
              Download Game
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}