import React from 'react';
import SomeComponent from './SomeComponent';
import { EnvProvider } from './EnvProvider';
import { FeatureProvider } from './FeatureProvider';

export default {
    title: 'Patterns/Providers/FeatureProvider',
    component: SomeComponent,
    decorators: [(Story) => (
        <FeatureProvider value={{ featureX: true }}> {}
            <Story />
        </FeatureProvider>
    )]
};

export const Default = {

};

export const IncludeEnvProvider = () => (
    <EnvProvider value={{ apiUrl: 'https://custom-api.example.com' }}>
        <FeatureProvider value={{ featureX: true }}> {/* Example with featureX disabled */}
            <SomeComponent />
        </FeatureProvider>
    </EnvProvider>
);
