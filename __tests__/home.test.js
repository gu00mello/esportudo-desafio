import React from 'react';

import {create} from 'react-test-renderer';
import Home from '../src/screens/Home';

describe('Home', () => {
    test('renders correctly', () => {
        const tree = create(<Home />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
