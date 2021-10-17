module.exports = {
    clearMocks: true,
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    transform: {
        '^.+\\.tsx?$': 'babel-jest',
        "\\.svg$": "svg-jest"
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    testPathIgnorePatterns: ["e2e"],
    moduleDirectories: ["node_modules", "src"],
};
