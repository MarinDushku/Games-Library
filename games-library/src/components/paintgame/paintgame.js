import React, { useState } from 'react';
import './paintgame.css';

export default function PaintGame() {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Sample reference images - replace with your actual image URLs
  const referenceImages = [
    {
      id: 1,
      name: "Van Gogh Self Portrait",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGforePXY7MDhEVzG3-6BVHM_qCnIeg2Z_Ow&s",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGforePXY7MDhEVzG3-6BVHM_qCnIeg2Z_Ow&s"
    },
    {
      id: 2,
      name: "Girl with a Pearl Earring",
      url: "https://i.pinimg.com/736x/f6/19/3b/f6193b8e3adb1d71a074b902d022c304.jpg",
      thumbnail: "https://i.pinimg.com/736x/f6/19/3b/f6193b8e3adb1d71a074b902d022c304.jpg"
    },
    {
      id: 3,
      name: "Swan",
      url: "https://i.pinimg.com/736x/f8/2e/2b/f82e2b2cf9d486c3832e29f9b49329f1.jpg",
      thumbnail: "https://i.pinimg.com/736x/f8/2e/2b/f82e2b2cf9d486c3832e29f9b49329f1.jpg"
    },
    {
      id: 4,
      name: "Mona Lisa",
      url: "https://i.pinimg.com/736x/42/be/eb/42beeb4a9cb677a37be772576295ed8e.jpg",
      thumbnail: "https://i.pinimg.com/736x/42/be/eb/42beeb4a9cb677a37be772576295ed8e.jpg"
    },
    {
      id: 5,
      name: "Hand of Cupid",
      url: "https://i.pinimg.com/736x/c0/0d/54/c00d54ce8f7287faabb6595f0733a07f.jpg",
      thumbnail: "https://i.pinimg.com/736x/c0/0d/54/c00d54ce8f7287faabb6595f0733a07f.jpg"
    },
    {
      id: 6,
      name: "The Son of Man",
      url: "https://i.pinimg.com/736x/7c/de/64/7cde645ffa16fa4f932f120f3e6f1086.jpg",
      thumbnail: "https://i.pinimg.com/736x/7c/de/64/7cde645ffa16fa4f932f120f3e6f1086.jpg"
    }
  ];

  const selectImage = (image) => {
    setSelectedImage(image);
  };

  const clearReference = () => {
    setSelectedImage(null);
  };

  return (
    <div className="paint-game-container">
      <div className="paint-game-header">
        <h1>Eden's Art Garden</h1>
        <p>Paint like the great artists of old</p>
      </div>
      
      {/* Reference Images Gallery */}
      <div className="reference-gallery">
        <h3>Choose Your Reference</h3>
        <div className="folder-grid">
          {referenceImages.map((image) => (
            <div 
              key={image.id} 
              className={`pixelated-folder ${selectedImage?.id === image.id ? 'selected' : ''}`}
              onClick={() => selectImage(image)}
            >
              <div className="folder-icon">
                <img src={image.thumbnail} alt={image.name} />
              </div>
              <p>{image.name}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Main Game Area with Side-by-Side Layout */}
      <div className="game-main-area">
        {/* Reference Panel */}
        <div className="reference-panel">
          <div className="reference-header">
            <h4>Reference Image</h4>
            {selectedImage && (
              <button className="clear-button" onClick={clearReference}>
                Clear
              </button>
            )}
          </div>
          
          {selectedImage ? (
            <div className="reference-display">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.name}
                className="reference-image"
              />
              <p className="reference-title">{selectedImage.name}</p>
            </div>
          ) : (
            <div className="reference-placeholder">
              <div className="placeholder-icon">🎨</div>
              <p>Select a reference image to begin painting</p>
            </div>
          )}
        </div>
        
        {/* Paint Canvas */}
        <div className="paint-canvas-area">
          <div className="canvas-header">
            <h4>Your Canvas</h4>
          </div>
          <iframe
            className="paint-iframe"
            style={{width: '100%', height: '600px', overflow: 'hidden', border: 'none'}}
            src="https://jspaint.app/" 
            title="Paint Game"
            scrolling="no"
          />
        </div>
      </div>
      
      <div className="game-instructions">
        <h3>How to Paint:</h3>
        <ul>
          <li>Select a reference image from the folders above</li>
          <li>Study the reference on the left while painting on the right</li>
          <li>Choose your tools - Select brushes, colors, and drawing tools from the toolbar</li>
          <li>Create your artwork - Click and drag to paint, draw, and design your masterpiece</li>
          <li>Use layers and effects - Experiment with different painting techniques and styles!</li>
          <li>Save your creation - Use File → Save or Ctrl+S to download your finished artwork</li>
          <li>Export your painting as PNG or JPG to share with others</li>
        </ul>
      </div>
    </div>
  );
}