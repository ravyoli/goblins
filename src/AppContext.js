import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [delaySeconds, setDelaySeconds] = useState(5);

    return (
        <AppContext.Provider value={{ delaySeconds, setDelaySeconds }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };