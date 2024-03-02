import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Vocabulary: React.FC = () => {
  const [word, setWord] = useState<string>('pussy');
  const [definition, setDefinition] = useState<string>('');

  useEffect(() => {
    fetchDefinition();
  }, []);

  const fetchDefinition = async () => {
    try {
      const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/sd3/json/${word}?key=d94dc1b4-ff95-4e6f-98a8-13e11fe62704`);
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0 && typeof data[0] === 'object') {
        const firstDefinition = data[0].shortdef[0];
        setDefinition(firstDefinition);
      } else {
        setDefinition('Definicja nie została znaleziona.');
      }
    } catch (error) {
      console.error('Błąd podczas pobierania definicji:', error);
      setDefinition('Wystąpił błąd podczas pobierania definicji.');
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchDefinition();
  };

  return (
    <div className='vocabulary'>
      <h1>Vocabulary</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={word} onChange={handleInputChange} />
        <button type="submit">Szukaj</button>
      </form>
      <h2>Definition:</h2>
      <p>{definition}</p>
        <Link to="/">Powrót</Link>
    </div>
  );
};

export default Vocabulary;
