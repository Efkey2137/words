import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Vocabulary from './components/Vocabulary';
import Progress from './components/Progress';
import { VocabularyProvider } from './components/VocabularyContext';
import "./App.css";

function App() {
  return (
    <div className="App dark-mode">
      <Router>
        <VocabularyProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vocabulary" element={<Vocabulary />} />
            <Route path="/dictionary" element={<Progress />} />
          </Routes>
        </VocabularyProvider>
      </Router>
    </div>
  );
}

export default App;
