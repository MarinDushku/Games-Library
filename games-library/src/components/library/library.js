import { useState } from 'react'; 
import Games from './games/games.js'; 
import background from '../../images/background library2.jpg';
import './library.css'; 

export default function Library() {
  const [selectedCategory, setSelectedCategory] = useState('All'); 

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="library-container" style={{backgroundImage: `url(${background})`}}>
      <aside className="sidebar">
        <h2>Categories</h2>
        <ul>
          <li onClick={() => handleCategoryClick('All')}>All Games</li>
          <li onClick={() => handleCategoryClick('Action')}>Action</li>
          <li onClick={() => handleCategoryClick('Adventure')}>Adventure</li>
          <li onClick={() => handleCategoryClick('Arcade')}>Arcade</li>
          <li onClick={() => handleCategoryClick('Fighting')}>Fighting</li>
          <li onClick={() => handleCategoryClick('Horror')}>Horror</li>
          <li onClick={() => handleCategoryClick('Puzzle')}>Puzzle</li>
          <li onClick={() => handleCategoryClick('Sports')}>Sports</li>
          <li onClick={() => handleCategoryClick('Strategy')}>Strategy</li>
          <li onClick={() => handleCategoryClick('RPG')}>RPG</li>
        </ul>
      </aside>
      
      <main className="main-content"> {}
        <Games selectedCategory={selectedCategory} />
      </main>
    </div>
  );
}