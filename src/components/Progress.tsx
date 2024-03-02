import React from 'react';
import { Link } from 'react-router-dom';

const Progress: React.FC = () => {
  
  return (
    <div>
      <h1>Progress</h1>
      <p>Tu jest progress ale bedzie robiony w 2 etapie :)</p>
      {/* Tu będzie wyświetlany progres jak dorobie w 2 etapie */}
      <Link to="/">Powrót</Link>
    </div>
  );
};

export default Progress;