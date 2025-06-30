
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar.js';
import Home from './components/home/home.js'; 
import Library from './components/library/library.js';

import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </div>
    </Router>
  );
}