import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Actions from './Actions';

const GamePage = () => {
    const location = useLocation();
    const { selectedCards } = location.state || { selectedCards: [] };
    const [currentAction, setCurrentAction] = useState();

    console.log(selectedCards);

    const executeActions = async (actions, signal) => {
        for (const action of actions) {
            if (signal.aborted) {
                setCurrentAction(null);
                break;
            }
            setCurrentAction(action);
          if (action.type === 'sound') {
            await playSound(action.clip, signal);
          } else if (action.type === 'wait') {
            await delay(action.seconds, signal);
          }
        }
      };
      
      const playSound = (file, signal) => {
        return new Promise((resolve, reject) => {
            if (signal?.aborted) return reject(new Error('Aborted'));
          const audio = new Audio(process.env.PUBLIC_URL + file);
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
        setStopped(true);
        navigate('/main');
      }

    const [isStarted, setStarted] = useState(false);
    const [isStopped, setStopped] = useState(false)


    useEffect(() => {
        // Automatically set started to true on page load
        setStarted(true);
      }, []); // The empty dependency array ensures this runs only once when the component mounts
    
    useEffect(() => {
        const abortController = new AbortController();
        const { signal } = abortController;
    
        if (isStarted) {
          const actions = Actions.filter(action=> !action.card || selectedCards.some(card => card.type == action.card));
          executeActions(actions, signal).catch(err => {
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

    return (
        <div className="App">
            <h1>Game Page</h1>
            <p>קלפים במשחק:</p>
            <ul>
                {selectedCards.map((card, index) => <li key={index}>{card.name}</li>)}
            </ul>

            <p>{currentAction?.text}</p>
            <button onClick={handleGoHome}>
                <p>
                    מסך ראשי
                </p>
            </button>
        </div>
    );
};

export default GamePage;