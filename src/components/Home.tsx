import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <Link to="/vocabulary">Vocabulary</Link>
      <br />
      <Link to="/progress">Sprawdź progress</Link>
    </div>
  );
};

export default Home;