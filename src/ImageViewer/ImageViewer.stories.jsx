import ImageViewer from './ImageViewer';

export default {
    title: 'Patterns/ContentViewer/ImageViewer',
    component: ImageViewer,
};

const Template = (args) => <ImageViewer {...args} />;

export const Default = Template.bind({});
Default.args = {
    src: 'https://via.placeholder.com/400',
    alt: 'Sample image',
};

export const LargeImage = Template.bind({});
LargeImage.args = {
    src: 'https://via.placeholder.com/800x600',
    alt: 'Large sample image',
};
