import './support.css';

export default function Support() {
  return (
    <div className='support-container'>
      <div className='SupTitle'>
        About
      </div>
      <div className='SupText'>
        Games Library is a web application inspired by platforms like Steam. It lets users browse, discover, and collect games in a personal library. The app features a modern interface for viewing game details, images, genres, and descriptions, creating an experience similar to online game stores.
      </div>
      <div className='SupFeatures'>
        Features
        <div className='Specialeffect-list'>    
          <ul>
            <li>Game Catalogue: Browse a list of games with images, titles, and genres.</li>
            <li>Game Details Page: View detailed descriptions, images, and metadata for each game.</li>
            <li>Search & Filter: Quickly find games by title or genre (planned/optional extension).</li>
            <li>Responsive Design: Works on desktop and mobile devices.</li>
          </ul>
        </div>
      </div>
    </div>
  ); 
}