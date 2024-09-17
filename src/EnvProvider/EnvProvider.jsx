import React, { createContext, useContext, useEffect, useState } from 'react';

export const EnvContext = createContext({});

export const EnvProvider = ({ children, value }) => {
    const [env, setEnv] = useState(value || {});

    useEffect(() => {
        const backendUrl = import.meta.env.VITE_BACKEND || 'http://localhost:3000';
        const featureEndpoint = import.meta.env.VITE_ENV_ENDPOINT || '/api/frontend-env';
        const fullUrl = `${backendUrl}${featureEndpoint}`;

        fetch(fullUrl)
            .then(response => response.json())
            .then(data => {
                setEnv(data);
            })
            .catch(error => console.error("Failed to load environment variables:", error));
        }, []);

    return (
        <EnvContext.Provider value={env}>
            {children}
        </EnvContext.Provider>
    );
};

export const useEnv = () => useContext(EnvContext);
