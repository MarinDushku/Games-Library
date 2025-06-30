
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar.js';
import Home from './components/home/home.js'; 
import Library from './components/library/library.js';
import About from './components/about/about.js';
import Support from './components/support/support.js';
import './App.css';


export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
    </Router>
  );
}