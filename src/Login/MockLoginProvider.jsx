import React, { createContext, useContext, useState } from 'react';

// Create a Context for the mock login
const MockLoginContext = createContext();

export const MockLoginProvider = ({ children }) => {
    const [userId, setUserId] = useState(null);

    // Mock login function for testing purposes
    const mockLoginFunction = (username, password) => {
        if (username === 'testuser' && password === 'testpassword') {
            const mockUserId = 'mock-uuid-12345';
            setUserId(mockUserId);
            console.log('Mock login successful, User ID:', mockUserId);
        } else {
            console.error('Mock login failed: Invalid username or password');
        }
    };

    return (
        <MockLoginContext.Provider value={{ userId, loginFunction: mockLoginFunction }}>
            {children}
        </MockLoginContext.Provider>
    );
};

// Custom hook to use the MockLoginContext
export const useMockLogin = () => {
    return useContext(MockLoginContext);
};
