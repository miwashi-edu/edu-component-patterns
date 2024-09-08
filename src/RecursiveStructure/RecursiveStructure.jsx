// RecursiveStructure.jsx
import React from 'react';
import styles from './RecursiveStructure.module.css';

const RecursiveStructure = ({ node, children, depth = 0 }) => {
    if (!node) return <>Missing data</>;
    const isRecursive = Array.isArray(node.nodes);
    const baseMultiplier = 10 ** depth;
    const { nodes, ...nodeProps } = node;

    return (
        <div className={styles.nodeContainer}>
            {children ? React.Children.map(children, (child) =>
                React.cloneElement(child, { ...nodeProps })
            ) : <div>Missing node tag</div>}
            {isRecursive && (
                <ul>
                    {node.nodes.map((child, index) => (
                        <li key={index * baseMultiplier + 1} className={styles.nodeItem}>
                            <RecursiveStructure
                                node={child}
                                depth={depth + 1}
                            >
                                {children}
                            </RecursiveStructure>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RecursiveStructure;
