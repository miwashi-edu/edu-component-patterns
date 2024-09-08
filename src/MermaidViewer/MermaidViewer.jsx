import React, { useEffect, useState } from "react";
import mermaid from "mermaid";
import styles from './MermaidViewer.module.css';

const mermaidConfig = {
    startOnLoad: true,
    theme: styles.theme || 'default',
    securityLevel: styles.securityLevel || 'loose',
    themeCSS: styles.themeCSS,
    fontFamily: styles.fontFamily || 'Fira Code',
};

mermaid.initialize(mermaidConfig);

const MermaidViewer = ({ chart }) => {
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            mermaid.contentLoaded();
        } catch (err) {
            setError(err.message || 'Error initializing Mermaid');
        }

        try {
            mermaid.parse(chart); // Parse the chart to check for errors
        } catch (err) {
            setError(err.str || 'Error parsing Mermaid definition');
        }
    }, [chart]);

    return (
        <div className="mermaid">
            {error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                chart
            )}
        </div>
    );
};

export default MermaidViewer;
