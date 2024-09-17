import { createContext, useContext, useState, useEffect } from "react";

// Create the ConfigContext
const ConfigContext = createContext(null);

// Custom hook to use the config context
export const useConfig = () => useContext(ConfigContext);

// Provider component
export const ConfigProvider = ({ children }) => {
    const [config, setConfig] = useState(null);

    useEffect(() => {
        // Fetch dynamic config
        fetch("/config")
            .then((response) => response.json())
            .then((data) => {
                // Merge environment variables with the fetched config
                const mergedConfig = {
                    ...data,
                    apiUrl: data.apiUrl || import.meta.env.VITE_BACKEND_URL, // Use env variable if not set by fetched config
                    featureFlag: data.featureFlag || import.meta.env.VITE_FEATURE_FLAG, // Example feature flag
                };
                setConfig(mergedConfig);
            })
            .catch((error) => console.error("Failed to load config", error));
    }, []);

    if (!config) {
        return <div>Loading configuration...</div>;
    }

    return (
        <ConfigContext.Provider value={config}>
            {children}
        </ConfigContext.Provider>
    );
};
