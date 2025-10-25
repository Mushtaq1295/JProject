// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api'; // Your Axios instance

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('authToken') || null);
    const [loading, setLoading] = useState(true); // To check initial auth status

    // Effect to set the token in localStorage and Axios headers when it changes
    useEffect(() => {
        if (token) {
            localStorage.setItem('authToken', token);
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            localStorage.removeItem('authToken');
            delete api.defaults.headers.common['Authorization'];
        }
        setLoading(false); // Finished loading/checking token
    }, [token]);

    // Function to handle login - saves user and token
    const loginAction = (userData, userToken) => {
        setUser(userData);
        setToken(userToken);
    };

    // Function to handle logout - clears user and token
    const logoutAction = () => {
        setUser(null);
        setToken(null);
        // No need to call backend logout if using Bearer tokens,
        // client just needs to discard the token.
    };

    // Optional: Fetch user data if token exists on initial load
    // You might need a '/user/me' endpoint protected by your 'protect' middleware
    useEffect(() => {
        const fetchUser = async () => {
            if (token && !user) { // Only fetch if token exists but user data is missing
                try {
                    // Assuming you have a '/user/me' endpoint that returns the user
                    const response = await api.get('/user/me');
                    setUser(response.data.user);
                } catch (error) {
                    console.error("Failed to fetch user on initial load:", error);
                    // Token might be invalid, log out
                    logoutAction();
                }
            }
             setLoading(false);
        };
        fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]); // Run when token changes (e.g., on initial load)


    const authContextValue = {
        user,
        token,
        loading,
        loginAction,
        logoutAction,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};