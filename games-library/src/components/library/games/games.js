import { useState } from 'react';
import gamesData from './gamesdata.js'; 
import GameModal from './gameModal.js'; // import the separate component
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

      <GameModal 
        game={selectedGame} 
        onClose={closeGameDetails}
      />
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