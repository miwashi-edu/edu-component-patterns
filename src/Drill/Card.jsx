import React from 'react';
import styles from './Drill.module.css';

const Card = ({ language }) => {
    const messages = {
        en: 'Hello!',
        fr: 'Bonjour!',
        es: '¡Hola!'
    };

    return (
        <div className={styles.card}>
            <p>{messages[language]}</p>
        </div>
    );
};

export default Card;
