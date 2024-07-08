import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Experiences';
import Home from './components/Home'
import './App.css';
import Experiences from './components/Experiences';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <nav>
          
            <div className="Buttons">
            <Link to="/"><button class="button-86">Home</button></Link>
            <Link to="/about"><button class="button-86">About</button></Link>
            <Link to="/Experiences"><button class="button-86">Experiences</button></Link>
            <Link to="/projects"><button class="button-86">Projects</button></Link>
            </div>
          
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Experiences" element={<Experiences />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;