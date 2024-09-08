import {MermaidViewer} from '../MermaidViewer';
import {AdaptiveImage} from '../AdaptiveImage';
import {ImageViewer} from '../ImageViewer';
import DownloadImageButtonDecorator from './DownloadImageButtonDecorator.jsx';

export default {
    title: 'Patterns/Decorator/DownloadImageButtonDecorator',
    component: DownloadImageButtonDecorator,
};

export const WithMermaidViewer = {
    render: (args) => (<DownloadImageButtonDecorator><MermaidViewer {...args} /></DownloadImageButtonDecorator>),
    args: {
        chart: 'graph TD; A-->B; A-->C; B-->D; C-->D;',
    }
};


export const WithAdaptiveImage = {
    render: (args) => (<DownloadImageButtonDecorator><AdaptiveImage {...args} /></DownloadImageButtonDecorator>),
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
    render: (args) => (<DownloadImageButtonDecorator><ImageViewer {...args} /></DownloadImageButtonDecorator>),
    args: {
        url: '/img/image.png',  // The image URL
        altText: 'An example image',  // Alt text for accessibility
        ariaLabel: 'Image Viewer example',
    }
};