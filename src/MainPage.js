import React, { useState, useContext } from 'react';
import Card from './Card';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { Cards } from './Cards';

const MainPage = () => {

    const navigate = useNavigate();

    const handleStartGame = () => {
        const selected = Cards.filter((_, index) => selectedCards[index]);
        navigate('/game', { state: { selectedCards: selected } });
      };
    
      const handleSettings = () => {
        navigate('/settings');
    };

    const handleCardClick = (index) => {
        const updatedSelection = selectedCards.map((isSelected, i) => 
          i === index ? !isSelected : isSelected
        );
        setSelectedCards(updatedSelection);
      };

    const [selectedCards, setSelectedCards] = useState(Array(Cards.length).fill(false));

    return (
        <>
            <h1>גבעת הגובלינים</h1>
            <div className="grid-container">
                {Cards.map((card, index) => (
                    <Card 
                    key={index} 
                    image={card.image} 
                    name={card.name}
                    isSelected={selectedCards[index]} 
                    onClick={() => handleCardClick(index)}
                    />
                ))}
            </div>
            <button className='EnterButton' onClick={handleStartGame}>
                <p>
                 התחל עם {selectedCards.filter(x => x).length} דמויות
                </p>
            </button>
            <button className='SettingsButton' onClick={handleSettings}>
                <p>הגדרות</p>
            </button>
        </>
    );
};

export default MainPage;