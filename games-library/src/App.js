import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from './components/navbar/navbar.js';
import Home from './components/home/home.js'; 
import Library from './components/library/library.js';
import About from './components/about/about.js';
import Support from './components/support/support.js';
import PlayNow from './components/playnow/playnow.js';
import PaintGame from './components/paintgame/paintgame.js';

import './App.css';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'unset';
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.documentElement.style.overflow = 'unset';
      document.body.style.overflow = 'unset';
    };
  }, [location.pathname]);

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/playnow" element={<PlayNow />} />
         <Route path="/paint" element={<PaintGame />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}