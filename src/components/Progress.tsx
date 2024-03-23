import React, { useContext } from 'react';
import { VocabularyContext, VocabularyContextType } from './VocabularyContext';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Progress: React.FC = () => {
  const context = useContext(VocabularyContext) as VocabularyContextType;

  return (
    <div className="container">
      <h2 className="mt-4">Dictionary</h2>
      <ul className="list-group">
        {context.dictionary.map(({ word, definition }, index) => (
          <li key={index} className="list-group-item bg-dark text-white">
            <strong>{word}:</strong> {definition}
          </li>
        ))}
      </ul>
      <Link to="/" className="mt-4 d-block">Go Back</Link>
    </div>
  );
};

export default Progress;
