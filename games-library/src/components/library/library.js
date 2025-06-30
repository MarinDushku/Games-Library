import background from './background library2.jpg'; // Two ../ to go up from components/library to src
import './library.css'; 
export default function Library() {
  return (
    <div className="library-container" style={{backgroundImage: `url(${background})`}}>
      <aside className="sidebar">
        <h2>Categories</h2>
        <ul>
          <li>Action</li>
          <li>Adventure</li>
          <li>Arcade</li>
          <li>Fighting</li>
          <li>Horror</li>
          <li>Puzzle</li>
          <li>Sports</li>
          <li>Strategy</li>
          <li>RPG</li>
        </ul>
      </aside>
      
      <main className="main-content">
        <h1>Game Library</h1>
      </main>
    </div>
  );
}