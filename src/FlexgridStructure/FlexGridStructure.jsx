// FlexGrid.jsx
import React from 'react';
import styles from './FlexGridStructure.module.css';

const FlexGridStructure = ({ config, data, children }) => {
    if (!data || data.length === 0) return <div>No data provided</div>;
    const { columns = 3, gap = '10px' } = config;

    return (
        <div
            className={styles.gridContainer}
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gap,
            }}
        >
            {data.map((item, index) => (
                <div key={index} className={styles.gridItem}>
                    {React.Children.map(children, (child) =>
                        React.cloneElement(child, { ...item })
                    )}
                </div>
            ))}
        </div>
    );
};

export default FlexGridStructure;
