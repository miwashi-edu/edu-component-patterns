import React from 'react';
import { MockLoginProvider } from './MockLoginProvider';
import { LoginProvider } from './LoginProvider';
import Login from './Login';

export default {
    title: 'Patterns/StateLifting/Login',
    component: Login,
};

export const Default = () => (
    <MockLoginProvider>
        <Login />
    </MockLoginProvider>
);

export const WithRealProvider = () => (
    <LoginProvider>
        <Login />
    </LoginProvider>
);
