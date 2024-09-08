import React from 'react';
import PropTypes from 'prop-types';
import styles from './CopyButtonDecorator.module.css';

const CopyButtonDecorator = ({ children }) => {
    const data = children.props.data;

    const handleCopy = () => {
        const dataString = typeof data === 'string' ? data : JSON.stringify(data, null, 2);
        navigator.clipboard.writeText(dataString)
            .then(() => alert('Copied to clipboard!'))
            .catch(err => console.error('Failed to copy:', err));
    };

    return (
        <div className={styles.content}>
            <button className={styles.copyButton} onClick={handleCopy}>
                Copy
            </button>
            {children}
        </div>
    );
};

CopyButtonDecorator.propTypes = {
    children: PropTypes.element.isRequired,
};

export default CopyButtonDecorator;
