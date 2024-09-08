import {MermaidViewer} from '../MermaidViewer';
import {AdaptiveImage} from '../AdaptiveImage';
import {ImageViewer} from '../ImageViewer';
import CopyImageButtonDecorator from './CopyImageButtonDecorator';

export default {
    title: 'Patterns/Decorator/CopyImageButtonDecorator',
    component: CopyImageButtonDecorator,
};

export const WithMermaidViewer = {
    render: (args) => (<CopyImageButtonDecorator><MermaidViewer {...args} /></CopyImageButtonDecorator>),
    args: {
        chart: 'graph TD; A-->B; A-->C; B-->D; C-->D;',
    }
};


export const WithAdaptiveImage = {
    render: (args) => (<CopyImageButtonDecorator><AdaptiveImage {...args} /></CopyImageButtonDecorator>),
    args: {
        url: '/img',
        name: 'image',
        extension: 'png',
        altText: 'An example image of impga',
        ariaLabel: 'Image of impga',
        fallbackUrl: '/img/image_xlarge.png',
    }
};

export const WithImageViewer = {
    render: (args) => (<CopyImageButtonDecorator><ImageViewer {...args} /></CopyImageButtonDecorator>),
    args: {
        url: '/img/image.png',  // The image URL
        altText: 'An example image',  // Alt text for accessibility
        ariaLabel: 'Image Viewer example',
    }
};