module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    transform: {
        "^.+\\.js$": "babel-jest"
    },
    transformIgnorePatterns: [
        "node_modules/(?!axios)"
    ],
    moduleDirectories: [
        "node_modules",
        "src"
    ],
    moduleNameMapper: {
        "\\.(css|less|scss|sass|svg)$": "<rootDir>/__mocks__/fileMock.js"
    }
};
