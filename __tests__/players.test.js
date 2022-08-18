import * as React from 'react';
import {PlayersProvider} from '../src/context/Players';
import {create} from 'react-test-renderer';
import Players from '../src/screens/Players';

jest.useFakeTimers();

const tree = create(
    <PlayersProvider>
        <Players />
    </PlayersProvider>
);

describe('Players', () => {
    test('renders correctly', () => {
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
