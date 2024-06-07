import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

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
        <button className='EnterButton' onClick={handleEnterClick}>
            <p>היכנס</p>
        </button>
    </header>
  );
};

export default WelcomePage;