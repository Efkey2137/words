import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useDictionary from '../hooks/useDictionary';

const Vocabulary: React.FC = () => {
  const [word, setWord] = useState<string>('');
  const [definition, setDefinition] = useState<string>('');
  const { dictionary, addWordToDictionary } = useDictionary();

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
        const addedSuccessfully = addWordToDictionary(word, firstDefinition);
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
    <div>
      <h1>Vocabulary</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={word} onChange={handleInputChange} />
        <button type="submit">Add Word</button>
      </form>
      <h2>Dictionary:</h2>
      <ul>
        {dictionary.map(({ word, definition }, index) => (
          <li key={index}>
            <strong>{word}:</strong> {definition}
          </li>
        ))}
      </ul>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default Vocabulary;
