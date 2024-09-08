import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './AdaptiveSizePropagator.module.css';

const AdaptiveSizePropagator = ({ children }) => {
    const wrapperRef = useRef(null);
    const [size, setSize] = useState('tiny');

    useEffect(() => {
        const handleResize = () => {
            const computedStyle = window.getComputedStyle(wrapperRef.current, '::after');
            setSize(computedStyle.content.replace(/"/g, '')); // Remove quotes from content value
        };

        handleResize(); // Set initial size
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={styles.adaptiveSizePropagator} ref={wrapperRef}>
            {React.Children.map(children, child =>
                React.cloneElement(child, { size })
            )}
        </div>
    );
};

AdaptiveSizePropagator.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AdaptiveSizePropagator;
