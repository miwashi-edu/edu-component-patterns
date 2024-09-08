import CopyButtonDecorator from './CopyButtonDecorator';
import {JsonViewer} from '../JsonViewer';

export default {
    title: 'Patterns/Decorator/CopyButtonDecorator',
    component: JsonViewer,
};

const Template = (args) => (
    <CopyButtonDecorator>
        <JsonViewer {...args} />
    </CopyButtonDecorator>
);

export const Default = Template.bind({});
Default.args = {
    data: {
        name: 'John Doe',
        age: 30,
        address: {
            street: '123 Main St',
            city: 'Hometown',
            country: 'Wonderland',
        },
    },
};

export const InvalidJsonString = Template.bind({});
InvalidJsonString.args = {
    data: '{invalidJson}',
};

export const JsonString = Template.bind({});
JsonString.args = {
    data: JSON.stringify({
        title: 'Sample',
        description: 'This is a sample JSON string',
    }),
};
