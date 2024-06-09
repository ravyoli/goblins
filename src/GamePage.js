import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Actions from './Actions';
import Card from './Card';
import { AppContext } from './AppContext';

const GamePage = () => {
  const { delaySeconds } = useContext(AppContext); 

  const location = useLocation();
  const { selectedCards } = location.state || { selectedCards: [] };
  const [currentAction, setCurrentAction] = useState();
  const [isStarted, setStarted] = useState(false);

  const executeActions = async (actions, signal, abortController) => {
    if (currentAction != null) {
      // continue from currentAction
      for (let i = 0; i < actions.length; ++i) {
        if (actions[i] === currentAction) {
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
      } else if (action.type === 'const_wait') {
        await delay(action.seconds, signal);
      } else if (action.type === 'wait') {
        await delay(delaySeconds, signal);
      }
    }
    setCurrentAction(null);
    abortController.abort('finished');
  };

  const playSound = (file, signal, volume = 1, loop = false) => {
    return new Promise((resolve, reject) => {
      if (signal?.aborted) return reject(new Error('Aborted'));
      const audio = new Audio(file);
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
      playSound('background1.m4a', signal, 0.2, true).catch(err => { });
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

  let currentCards = null;
  if (currentAction?.card != null) {
    currentCards = <div className='playing-cards'>
      {selectedCards.filter(card => card.type === currentAction?.card).map((c, idx) =>
        <Card
          key={idx}
          image={c.image}
          name={c.name}
          isSelected={true} />
      )}
    </div>;
  }

  return (
    <div className="App">
      {currentCards}
      <p>{currentAction?.text}</p>
      <div className='buttons-container'>
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
    </div>
  );
};

export default GamePage;