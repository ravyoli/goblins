import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './AppContext';

const SettingsPage = () => {
  const { delaySeconds, setDelaySeconds, audioSpeed, setAudioSpeed } = useContext(AppContext);
  const [settings, setSettings] = useState({ delay: delaySeconds, speed: audioSpeed });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value
    }));
  };

  const handleSave = () => {
    setDelaySeconds(parseInt(settings.delay, 10));
    setAudioSpeed(parseInt(settings.speed, 10));
    navigate('/main');
  };

  return (
    <div>
      <h1>הגדרות</h1>
      <div className="input-container">
        <label className="input-label">זמן השהייה:</label>
        <input
          name="delay"
          type="number"
          value={settings.delay}
          onChange={handleChange}
          className="input-box"
        />
        <label className="input-label">מהירות הקראה:</label>
        <input
          name="speed"
          type="number"
          value={settings.speed}
          onChange={handleChange}
          className="input-box"
        />
      </div>
      <button onClick={handleSave}>שמור</button>
    </div>
  );
};

export default SettingsPage;