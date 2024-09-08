import ImageViewer from './ImageViewer';  // Import the ImageViewer component

export default {
    title: 'Patterns/ContentViewer/ImageViewer',  // Story title
    component: ImageViewer,  // Reference the component
};

// Template for the ImageViewer component
const Template = (args) => <ImageViewer {...args} />;

export const Default = Template.bind({});
Default.args = {
    url: '/img/image.png',  // The image URL
    altText: 'An example image',  // Alt text for accessibility
    ariaLabel: 'Image Viewer example',  // ARIA label for screen readers
};

export const WithFallback = Template.bind({});
WithFallback.args = {
    url: '/img/non_existent_image.png',  // Simulate a missing image
    altText: 'An image with fallback',  // Alt text for accessibility
    ariaLabel: 'Image Viewer with fallback',
    fallbackUrl: '/img/image.png',
};
