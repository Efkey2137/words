import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Home: React.FC = () => {
  return (
    <div className="container">
      <h1 className="mt-4">Welcome to Vocabulary Tracker</h1>
      <p className="lead">This application helps you keep track of new words you've learned along with their definitions.</p>
      <div className="mt-4">
        <Link to="/vocabulary" className="btn btn-success mr-2">Vocabulary</Link>
        <Link to="/dictionary" className="btn btn-primary">View Progress</Link>
      </div>
    </div>
  );
};

export default Home;
