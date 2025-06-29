import Spline from '@splinetool/react-spline';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Spline 
        scene="https://prod.spline.design/zanBOu6Q9QkrQovw/scene.splinecode"
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1
        }}
        onLoad={(spline) => {
          // Hide tutorial button when scene loads
          const viewer = document.querySelector('spline-viewer');
          if (viewer) {
            viewer.style.setProperty('--spline-menu-display', 'none');
          }
        }}
      />
    </div>
  );
}
