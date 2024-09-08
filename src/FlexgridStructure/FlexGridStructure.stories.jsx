import FlexGridStructure from './FlexGridStructure';
import Card from './Card';

export default {
    title: 'Patterns/StructuralAdapter/FlexGridStructure',
    component: FlexGridStructure,
};

const Template = (args) => <FlexGridStructure {...args} />;

export const Default = Template.bind({});
Default.args = {
    config: {
        columns: 3,
        gap: '15px',
    },
    data: [
        { title: 'Card 1', description: 'This is the first card.' },
        { title: 'Card 2', description: 'This is the second card.' },
        { title: 'Card 3', description: 'This is the third card.' },
        { title: 'Card 4', description: 'This is the fourth card.' },
        { title: 'Card 5', description: 'This is the fifth card.' },
    ],
    children: <Card />,
};
