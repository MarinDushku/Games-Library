import './gameModal.css';
import ModalPortal from './modalPortal.js';

export default function GameModal({ game, onClose }) {
  if (!game) return null;

  return (
    <ModalPortal>
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
    </ModalPortal>
  );
}