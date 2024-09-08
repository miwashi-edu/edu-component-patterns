import AdaptiveSizePropagator from './AdaptiveSizePropagator';

// A sample child component that displays the size
const SampleComponent = ({ size }) => (
    <div>
        <h3>Current size: {size}</h3>
    </div>
);

export default {
    title: 'Patterns/AdaptiveComponent/AdaptiveSizePropagator',
    component: AdaptiveSizePropagator,
};

// Template to demonstrate the AdaptiveSizePropagator
const Template = (args) => (
    <AdaptiveSizePropagator>
        <SampleComponent />
        <SampleComponent />
    </AdaptiveSizePropagator>
);

export const Default = Template.bind({});
Default.args = {};
