import { action } from '@storybook/addon-actions';
import UserAtom from './UserAtom';

export default {
    title: 'Patterns/StateLifting/Login/UserAtom',
    component: UserAtom,
}

export const Default = {
    args: {
        onUserChange: action('user-changed'), // Log the 'user-changed' event
    },
};


export const WithInitialValue = {
    args: {
        onUserChange: action('user-changed'),
        initialValue: 'John Doe',
    },
};


export const MissingOnChange = {
    args: {
        initialValue: 'John Doe',
    },
};