import React from 'react';
import './paintgame.css';

export default function PaintGame() {
  return (
    <div className="paint-game-container">
      <div className="paint-game-header">
        <h1>Eden's Art Garden</h1>
        <p>Paint like the great artists of old</p>
      </div>
      
      <div className="game-wrapper">
        <iframe
          style={{width: '100%', height: '550px', overflow: 'hidden', border: 'none'}}
          src="https://jspaint.app/" 
          title="Paint Game"
          scrolling="no"
        />
      </div>
      
      <div className="game-instructions">
        <h3>How to Play:</h3>
        <ul>
          <li>Choose your tools - Select brushes, colors, and drawing tools from the toolbar</li>
          <li>Create your artwork - Click and drag to paint, draw, and design your masterpiece</li>
          <li>Use layers and effects - Experiment with different painting techniques and styles!</li>
          <li>Save your creation - Use File Save or Ctrl+S to download your finished artwork </li>
          <li>Import images by copying google image url if you want to use as reference </li>
          <li>Save your creation - Use File Save or Ctrl+S to download your finished artwork </li>
          <li> Export your painting as PNG or JPG to share with others </li>
        </ul>
      </div>
    </div>
  );
}