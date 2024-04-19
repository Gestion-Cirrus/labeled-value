module.exports = {
  transform: {
    '^.+\\.(js|jsx)?$': ['babel-jest', { configFile: './babel.config.js' }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '/node_modules/(?!(ol|color-space|color-rgba)/)'
  ],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '^ol/ol.css$': '<rootDir>/__mocks__/styleMock.js',
    '^ol$': '<rootDir>/__mocks__/olMock.js',
    '^ol/(.*)$': '<rootDir>/__mocks__/olMock.js',
    '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};
