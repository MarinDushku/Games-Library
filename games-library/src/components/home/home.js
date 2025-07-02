import { useNavigate } from 'react-router-dom';
import Spline from '@splinetool/react-spline'; 
import Cover from '../cover/cover.js';
import './home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className='home' >
      <Cover/>
      <Spline
        scene="https://prod.spline.design/zanBOu6Q9QkrQovw/scene.splinecode"
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
        onLoad={() => {
          const viewer = document.querySelector('spline-viewer');
          if (viewer) {
            viewer.style.setProperty('--spline-menu-display', 'none');
          }
        }}
      />
      
      <main className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Your Gaming Eden Awaits</h1>
          <p className="hero-subtitle">Discover worlds beyond imagination in our curated collection</p>
          <button className="cta-button" onClick={() => navigate('/library')}>
            Enter the Library                        
          </button>
        </div>
      </main>
    </div>
  ); 
}