import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './AppContext';

const SettingsPage = () => {
  const { delaySeconds, setDelaySeconds } = useContext(AppContext);
  const [inputValue, setInputValue] = useState(delaySeconds);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSave = () => {
    setDelaySeconds(parseInt(inputValue, 10));
    navigate('/main');
  };

  return (
    <div>
      <h1>הגדרות</h1>
      <div className="input-container">
        <label className="input-label">זמן השהייה:</label>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          className="input-box"
        />
      </div>
      <button onClick={handleSave}>שמור</button>
    </div>
  );
};

export default SettingsPage;
