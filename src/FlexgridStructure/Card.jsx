import styles from './FlexGridStructure.module.css';

const Card = ({ title, description }) => {
    return (
        <div style={{ border: '1px solid black', padding: '10px', borderRadius: '5px' }}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Card;
