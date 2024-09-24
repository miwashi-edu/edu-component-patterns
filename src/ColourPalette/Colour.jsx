// Colour.jsx
import React from 'react';
import styles from './ColourPalette.module.css';

const Colour = ({ className, label }) => {
    return (
        <div className={`${styles.colourContainer} ${styles[className]}`}>
            {label}
        </div>
    );
};

export default Colour;
