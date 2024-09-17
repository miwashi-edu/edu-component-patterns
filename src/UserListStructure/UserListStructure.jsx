import React from 'react';

const UserListStructure = ({ config, data, children }) => {
    if (!data || data.length === 0) return <div>No data provided</div>;

    const { direction = 'column', gap = '10px' } = config;

    const containerStyle = {
        display: 'flex',
        flexDirection: direction,
        gap: gap
    };

    return (
        <div style={containerStyle}>
            {data.map((user, index) => (
                <div key={index}>
                    {React.Children.map(children, (child) =>
                        React.cloneElement(child, { ...user })
                    )}
                </div>
            ))}
        </div>
    );
};

export default UserListStructure;
