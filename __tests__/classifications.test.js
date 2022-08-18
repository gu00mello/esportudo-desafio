import * as React from 'react';
import {ClassificationsProvider} from '../src/context/Classifications';
import {create} from 'react-test-renderer';
import Classifications from '../src/screens/Classifications';

jest.useFakeTimers();

const tree = create(
    <ClassificationsProvider>
        <Classifications />
    </ClassificationsProvider>
);

describe('Classifications', () => {
    test('renders correctly', () => {
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
