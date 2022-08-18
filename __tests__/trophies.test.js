import * as React from 'react';
import {TrophiesProvider} from '../src/context/Trophies';
import {create} from 'react-test-renderer';
import Trophies from '../src/screens/Trophies';

jest.useFakeTimers();

const tree = create(
    <TrophiesProvider>
        <Trophies />
    </TrophiesProvider>
);

describe('Trophies', () => {
    test('renders correctly', () => {
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
