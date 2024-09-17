import React from 'react';
import {EnvProvider, useEnv} from './EnvProvider.jsx';
import {FeatureProvider, useFeatures} from './FeatureProvider.jsx';

const SomeComponent = () => {
    const env = useEnv();
    const features = useFeatures();

    return (
        <div>
            <p>API URL: {env.apiUrl}</p>
            <p>Some Other Variable: {env.someOtherVariable}</p>
            <p>Feature X is {features.featureX ? "enabled" : "disabled"}</p>
            <p>Feature Y is {features.featureY ? "enabled" : "disabled"}</p>

        </div>
    );
};

export default SomeComponent;
