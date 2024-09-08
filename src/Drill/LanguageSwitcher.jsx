import styles from './Drill.module.css';

const LanguageSwitcher = ({ onLanguageChange }) => {
    const handleLanguageSelect = (e) => {
        onLanguageChange(e.target.value);
    };

    return (
        <div className={styles.switcher}>
            <label>Select Language: </label>
            <select onChange={handleLanguageSelect}>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
            </select>
        </div>
    );
};

export default LanguageSwitcher;
