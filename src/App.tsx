import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Vocabulary from './components/Vocabulary';
import Progress from './components/Progress';
import { DictionaryProvider } from './contexts/DictionaryContext'; 
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <DictionaryProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vocabulary" element={<Vocabulary />} />
            <Route path="/progress" element={<Progress />} />
          </Routes>
        </DictionaryProvider>
      </Router>
    </div>
  );
}

export default App;