import AdaptiveSizePropagator from './AdaptiveSizePropagator';
import './SampleComponent.css'; // Assuming you will add custom styles here

const SampleComponent = ({ size }) => {
    const sizeStyles = {
        tiny: { width: '100px', height: '100px', backgroundColor: 'lightblue' },
        small: { width: '150px', height: '150px', backgroundColor: 'lightgreen' },
        medium: { width: '200px', height: '200px', backgroundColor: 'lightcoral' },
        large: { width: '250px', height: '250px', backgroundColor: 'lightgoldenrodyellow' },
        xLarge: { width: '300px', height: '300px', backgroundColor: 'lightpink' },
    };

    return (
        <div style={{ ...sizeStyles[size], margin: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h3>Current size: {size}</h3>
        </div>
    );
};

export default {
    title: 'Patterns/StatePropagating/AdaptiveSizePropagator',
    component: AdaptiveSizePropagator,
};

// Template to demonstrate the AdaptiveSizePropagator
const Template = (args) => (
    <AdaptiveSizePropagator>
        <SampleComponent />
    </AdaptiveSizePropagator>
);

export const Default = Template.bind({});
Default.args = {};
