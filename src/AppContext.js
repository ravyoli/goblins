import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [delaySeconds, setDelaySeconds] = useState(5);
    const [audioSpeed, setAudioSpeed] = useState(100);

    return (
        <AppContext.Provider value={{ delaySeconds, setDelaySeconds, audioSpeed, setAudioSpeed }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };