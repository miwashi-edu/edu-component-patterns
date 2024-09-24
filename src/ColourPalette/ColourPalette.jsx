// ColourPalette.jsx
import React from 'react';
import styles from './ColourPalette.module.css';
import Colour from './Colour';

const ColourPalette = () => {
    return (
        <div className={styles.paletteContainer}>
            <Colour className="primaryColor" label="Primary" />
            <Colour className="secondaryColor" label="Secondary" />
            <Colour className="accentColor" label="Accent" />
            <Colour className="backgroundColor" label="Background" />
            <Colour className="textColor" label="Text" />
            <Colour className="additionalColor1" label="Additional 1" />
            <Colour className="additionalColor2" label="Additional 2" />
            <Colour className="additionalColor3" label="Additional 3" />
        </div>
    );
};

export default ColourPalette;
