import * as React from 'react';
import {LeaguesProvider} from '../src/context/Leagues';
import {create} from 'react-test-renderer';
import Leagues from '../src/screens/Leagues';

jest.useFakeTimers();

const tree = create(
    <LeaguesProvider>
        <Leagues />
    </LeaguesProvider>
);

describe('Leagues', () => {
    test('renders correctly', () => {
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
