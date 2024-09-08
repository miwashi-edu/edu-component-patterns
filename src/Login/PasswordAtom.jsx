import styles from './Login.module.css';

const PasswordAtom = ({ onPasswordChange, label = "Password" }) => {
    if (!onPasswordChange) {
        return (
            <>
                <b>onChange function required for password!</b><br />
            </>
        );
    }

    const handleChange = (e) => {
        onPasswordChange(e.target.value);
    }

    return (
        <div className={styles.passwordContainer}>
            <label className={styles.passwordLabel}>
                {label}:
                <input
                    type="password"
                    onChange={handleChange}
                    placeholder="Enter password"
                    className={styles.passwordInput}
                />
            </label>
        </div>
    );
}

export default PasswordAtom;
