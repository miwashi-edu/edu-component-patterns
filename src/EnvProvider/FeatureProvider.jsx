import React, { createContext, useContext, useEffect, useState } from 'react';

export const FeatureContext = createContext({});

export const FeatureProvider = ({ children }) => {
    const [features, setFeatures] = useState({});

    useEffect(() => {
        const backendUrl = import.meta.env.VITE_BACKEND || 'http://localhost:3000';
        const featureEndpoint = import.meta.env.VITE_FEATURE_ENDPOINT || '/api/features';
        const fullUrl = `${backendUrl}${featureEndpoint}`;

        fetch(fullUrl)
            .then(response => response.json())
            .then(data => {
                setFeatures(data);
            })
            .catch(error => console.error("Failed to load features:", error));
    }, []);

    return (
        <FeatureContext.Provider value={features}>
            {children}
        </FeatureContext.Provider>
    );
};

export const useFeatures = () => useContext(FeatureContext);
