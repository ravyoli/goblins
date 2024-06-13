import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './AppContext';

const SettingsPage = () => {
  const { delaySeconds, setDelaySeconds } = useContext(AppContext);
  const { audioSpeed, setAudioSpeed } = useContext(AppContext);
  const [delayValue, setDelayValue] = useState(delaySeconds);
  const [audioSpeedValue, setAudioSpeedValue] = useState(audioSpeed);
  const navigate = useNavigate();

  const handleDelayChange = (e) => {
    setDelayValue(e.target.value);
  };

  const handleAudioSpeedChange = (e) => {
    setAudioSpeedValue(e.target.value);
  };

  const handleSave = () => {
    setDelaySeconds(parseInt(delayValue, 10));
    setAudioSpeed(parseInt(audioSpeedValue, 10));
    navigate('/main');
  };

  return (
    <div>
      <h1>הגדרות</h1>
      <div className="input-container">
        <label className="input-label">זמן השהייה:</label>
        <input
          type="number"
          value={delayValue}
          onChange={handleDelayChange}
          className="input-box"
        />
        <label className="input-label">מהירות הקראה:</label>
        <input
          type="number"
          value={audioSpeedValue}
          onChange={handleAudioSpeedChange}
          className="input-box"
        />
      </div>
      <button onClick={handleSave}>שמור</button>
    </div>
  );
};

export default SettingsPage;
