import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <p>Wejdź do Vocabulary, aby nauczyć się znaczenia słówek po angielsku np "definicja pussy to cat"
      </p>
      <Link to="/vocabulary">Vocabulary</Link>
      <br />
      <Link to="/progress">Sprawdź progress</Link>
    </div>
  );
};

export default Home;