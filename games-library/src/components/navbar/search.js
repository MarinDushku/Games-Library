import React, { useState } from 'react';
import './search.css'; // Changed from './navbar.css'
import gamesData from '../library/games/gamesdata.js'; 
import GameModal from '../library/games/gameModal.js';

export default function Search() {
   const [searchQuery, setSearchQuery] = useState('');
   const [selectedGame, setSelectedGame] = useState(null);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = gamesData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleGameClick = (game) => {
    setSelectedGame(game);
    setSearchQuery(''); // Clear search after selection
  };

  const closeGameModal = () => {
    setSelectedGame(null);
  };

  return (
    <>
        <div className="search-input-container">
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchQuery} 
            onChange={handleSearchChange}
            className="search-input"
          />
          <button type="button" className="search-button">
              <i className="fa fa-search"></i>
          </button> 
        </div>
        
        {searchQuery && filteredData.length > 0 && (
          <ul className="search-results">
            {filteredData.slice(0, 5).map((item) => (
              <li 
                key={item.id} 
                onClick={() => handleGameClick(item)}
                className="search-result-item search-dropdown-game-item"
              >
                {item.title}
              </li>
            ))}
          </ul>   
        )}
        
        {/* Modal renders here when a game is selected */}
        <GameModal 
          game={selectedGame} 
          onClose={closeGameModal}
        />
    </>      
  );
}