import AdaptiveImage from './AdaptiveImage'; // Import the component

export default {
    title: 'Patterns/AdaptiveComponent/AdaptiveImage',
    component: AdaptiveImage,
};

export const Default = {
    args: {
        url: '/img',
        name: 'image',
        extension: 'png',
        altText: 'An example image of impga',
        ariaLabel: 'Image of impga',
        fallbackUrl: '/img/image_xlarge.png',
    }
};
export const MissingImage = {
    args: {
        url: '/img',
        name: 'non_existent_image',  // This simulates a missing image to trigger fallback
        extension: 'png',
        altText: 'Missing image example',
        ariaLabel: 'Missing image',
        fallbackUrl: '/img/image_xlarge.png',
    }
};