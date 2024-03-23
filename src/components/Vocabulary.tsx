import React, { useState, useContext } from 'react';
import { VocabularyContext, VocabularyContextType } from './VocabularyContext';
import useDictionary from '../hooks/useDictionary';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Vocabulary: React.FC = () => {
  const [word, setWord] = useState<string>('');
  const [definition, setDefinition] = useState<string>('');
  const context = useContext(VocabularyContext) as VocabularyContextType;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/sd3/json/${word}?key=d94dc1b4-ff95-4e6f-98a8-13e11fe62704`);
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0 && typeof data[0] === 'object' && data[0].shortdef && data[0].shortdef.length > 0) {
        const firstDefinition = data[0].shortdef[0];
        setDefinition(firstDefinition);
        const addedSuccessfully = context.addWordToDictionary(word, firstDefinition);
        if (addedSuccessfully) {
          setWord('');
        } else {
          alert('Słowo już istnieje w słowniku.');
        }
      } else {
        setDefinition('Definicja nie została znaleziona.');
      }
    } catch (error) {
      console.error('Błąd pobierania definicji:', error);
      setDefinition('Wystąpił błąd podczas pobierania definicji.');
    }
  };

  return (
    <div className="container">
      <h1 className="mt-4">Vocabulary</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={word} onChange={handleInputChange} className="form-control mb-2" placeholder="Enter word" />
        <button type="submit" className="btn btn-primary">Add Word</button>
      </form>
      <h2 className="mt-4">Latest Words:</h2>
      <ul className="list-group">
        {context.dictionary.slice(-3).map(({ word, definition }, index) => (
          <li key={index} className="list-group-item bg-dark text-white">
            <strong>{word}:</strong> {definition}
          </li>
        ))}
      </ul>
      <Link to="/" className="mt-4 d-block">Go Back</Link>
    </div>
  );
};

export default Vocabulary;
