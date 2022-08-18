import * as React from 'react';
import {TeamsProvider} from '../src/context/Teams';
import {create} from 'react-test-renderer';
import Teams from '../src/screens/Teams';

jest.useFakeTimers();

const tree = create(
    <TeamsProvider>
        <Teams />
    </TeamsProvider>
);

describe('Teams', () => {
    test('renders correctly', () => {
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
