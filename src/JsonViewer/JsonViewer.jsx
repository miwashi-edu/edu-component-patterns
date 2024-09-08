import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // JSON highlighting theme
import 'prismjs/components/prism-json'; // Load JSON syntax highlighting
import styles from './JsonViewer.module.css';

const JsonViewer = ({ data }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, [data]);

    if (!data) {
        return <div className={styles.noData}>No data provided.</div>;
    }

    let jsonString;
    if (typeof data === 'string') {
        try {
            jsonString = JSON.stringify(JSON.parse(data), null, 2); // Parse if string, pretty print
        } catch (error) {
            return <div className={styles.error}>Error: Invalid JSON string provided.</div>;
        }
    } else if (typeof data === 'object') {
        jsonString = JSON.stringify(data, null, 2);
    } else {
        return <div className={styles.error}>Error: Unsupported data type. Please provide a JSON string or object.</div>;
    }

    return (
        <pre className="language-json">
            <code className="language-json">{jsonString}</code>
        </pre>
    );
};

JsonViewer.propTypes = {
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default JsonViewer;
