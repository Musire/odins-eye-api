import React, { createContext, useEffect, useState } from 'react';

// Create a new context for the auth state and functions
export const AuthContext = createContext();

// Define an AuthProvider component
export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [token, setToken] = useState('');

    useEffect(() => {
        const retreivedToken = localStorage.getItem('token')
        
        if (retreivedToken) {
            setAuthenticated(true)
            
            setToken(retreivedToken)
        }
    }, [])

    const login = (newToken) => {
        setToken(newToken);
        localStorage.setItem('token', newToken)
        console.log('successfully login')
        setAuthenticated(true);
    };

    const logout = () => {
        setToken('');
        localStorage.removeItem('token')
        console.log('successfully signout')
        setAuthenticated(false);
    };

    const authContext = {
        authenticated,
        token,
        login,
        logout,
    };

    // Pass the auth context to the children components
    return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
};