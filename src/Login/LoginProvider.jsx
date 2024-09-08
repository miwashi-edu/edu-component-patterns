import React, { createContext, useContext, useState } from 'react';

// Create a Context for the login state
const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [userId, setUserId] = useState(null);

    // Real login function that interacts with an API
    const loginFunction = async (username, password) => {
        try {
            // Replace with your actual API call
            const response = await fetch('https://your-api.com/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            const result = await response.json();

            if (response.ok) {
                setUserId(result.userId);  // Assuming the API returns a userId
                console.log('Login successful, User ID:', result.userId);
            } else {
                console.error('Login failed:', result.message);
            }
        } catch (error) {
            console.error('An error occurred during login:', error);
        }
    };

    return (
        <LoginContext.Provider value={{ userId, loginFunction }}>
            {children}
        </LoginContext.Provider>
    );
};

// Custom hook to use the LoginContext
export const useLogin = () => {
    return useContext(LoginContext);
};
