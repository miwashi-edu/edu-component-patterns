import Drill from './Drill';

export default {
    title: 'Patterns/StatePropagating/Drill',
    component: Drill,
};

const Template = (args) => <Drill {...args} />;

export const Default = Template.bind({});
Default.args = {};
