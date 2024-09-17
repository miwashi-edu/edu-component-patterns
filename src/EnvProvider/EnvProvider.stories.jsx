import React from 'react';
import SomeComponent from './SomeComponent';
import { EnvProvider } from './EnvProvider';
import { FeatureProvider } from './FeatureProvider';

export default {
    title: 'Patterns/Providers/EnvProvider',
    component: SomeComponent,
    decorators: [(Story) => (
        <FeatureProvider value={{ featureX: true }}> {}
            <Story />
        </FeatureProvider>
    )]
};

export const Default = {};

export const IncludeFeatureProvider = () => (
        <FeatureProvider value={{ featureX: true }}> {/* Example with featureX disabled */}
            <EnvProvider value={{ apiUrl: 'https://custom-api.example.com' }}>
                <SomeComponent />
            </EnvProvider>
        </FeatureProvider>
);
