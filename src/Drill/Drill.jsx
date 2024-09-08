import React, { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import Card from './Card';
import styles from './Drill.module.css';

const Drill = () => {
    const [language, setLanguage] = useState('en');  // State lifted to parent

    const handleLanguageSwitch = (newLanguage) => {
        setLanguage(newLanguage);
    };

    return (
        <div className={styles.drillContainer}>
            <LanguageSwitcher onLanguageChange={handleLanguageSwitch} />
            <Card language={language} />
        </div>
    );
};

export default Drill;
