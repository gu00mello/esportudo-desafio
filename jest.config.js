module.exports = {
    preset: 'react-native',
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json',
            babelConfig: true
        }
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    transformIgnorePatterns: [],
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '\\.snap$'],
    cacheDirectory: '.jest/cache'
};
