import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Actions from './Actions';
import Card from './Card';

const GamePage = () => {
  const location = useLocation();
  const { selectedCards } = location.state || { selectedCards: [] };
  const [currentAction, setCurrentAction] = useState();
  const [isStarted, setStarted] = useState(false);

  const executeActions = async (actions, signal, abortController) => {
    if (currentAction != null) {
      // continue from currentAction
      for (let i = 0; i < actions.length; ++i) {
        if(actions[i] === currentAction) {
          actions.splice(0, i);
          break;
        }
      }
    }
    for (const action of actions) {
      if (signal.aborted) {
        break;
      }
      setCurrentAction(action);
      if (action.type === 'sound') {
        await playSound(action.clip, signal);
      } else if (action.type === 'wait') {
        await delay(action.seconds, signal);
      }
    }
    setCurrentAction(null);
    abortController.abort('finished');
  };

  const playSound = (file, signal, volume=1, loop=false) => {
    return new Promise((resolve, reject) => {
      if (signal?.aborted) return reject(new Error('Aborted'));
      const audio = new Audio(process.env.PUBLIC_URL + file);
      audio.volume = volume;
      audio.loop = loop;
      audio.play();
      audio.onended = resolve;

      signal?.addEventListener('abort', () => {
        audio.pause();
        audio.currentTime = 0;
        reject(new Error('Aborted'));
      });
    });
  };

  const delay = (seconds, signal) => {
    return new Promise((resolve, reject) => {
      if (signal?.aborted) return reject(new Error('Aborted'));
      const timeoutId = setTimeout(resolve, seconds * 1000);
      signal?.addEventListener('abort', () => {
        clearTimeout(timeoutId);
        reject(new Error('Aborted'));
      });
    });
  };

  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate('/main');
  }

  const handleWait = () => {
    setStarted(!isStarted);
  }


  useEffect(() => {
    // Automatically set started to true on page load
    setStarted(true);
  }, []); // The empty dependency array ensures this runs only once when the component mounts

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    if (isStarted) {
      playSound('background1.m4a', signal, 0.1, true).catch(err => {});
      const actions = Actions.filter(action => !action.card || selectedCards.some(card => card.type == action.card));
      executeActions(actions, signal, abortController).catch(err => {
        if (err.message === 'Aborted') {
          console.log('Actions were aborted');
        }
      });
    }

    // Cleanup function to abort actions when the component unmounts or when `started` changes
    return () => {
      abortController.abort();
    };
  }, [isStarted, selectedCards]);

  let currentCard = null;
  if (currentAction?.card != null) {
    let card = selectedCards.filter(card => card.type === currentAction?.card)[0];
    currentCard = <Card
      image={card.image}
      name={card.name}
      isSelected={true}
    />;
  }

  return (
    <div className="App">
      {/* <p>קלפים במשחק</p>
      <ul>
        {selectedCards.map((card, index) => <li key={index}>{card.name}</li>)}
      </ul> */}
      {currentCard}
      <p>{currentAction?.text}</p>
      <button onClick={handleWait}>
        <p>
          {!isStarted ? 'בוא נמשיך' : 'חכה רגע'}
        </p>
      </button>
      <button onClick={handleGoHome}>
        <p>
          מסך ראשי
        </p>
      </button>
    </div>
  );
};

export default GamePage;