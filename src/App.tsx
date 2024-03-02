import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Vocabulary from './components/Vocabulary';
import Progress from './components/Progress';
import './App.css';

function App() {
  return (
    
    <div className="App">
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/vocabulary" element={<Vocabulary />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
    </Router>
    </div>

  );
}

export default App;