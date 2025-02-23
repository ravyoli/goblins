import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Button from './components/Button';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleEnterClick = () => {
    navigate('/main');
  };

  return (
    <header className="App-header">
        <p className="Title">
            גבעת הגובלינים
        </p>
        <img src="goblin.jpg" className="App-logo" alt="logo" />
        <Button onClick={handleEnterClick}>
            היכנס
        </Button>
    </header>
  );
};

export default WelcomePage;
