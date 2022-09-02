//eslint-disable-next-line
import React, { useState } from 'react';
import { Routes } from './router';
import { AuthContext } from './context';
const App = () => {
    const [token, setToken] = useState(false);
    return (
        <AuthContext.Provider value={{ token, setToken }}>
            <Routes />
        </AuthContext.Provider>
    );
};

export default App;
