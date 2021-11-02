module.exports = {
  name: 'Portfolio',
  displayName: {
    name: 'Portfolio Frontend',
    color: 'yellow',
  },
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__generated__/',
    '<rootDir>/src/tests/AppMock.tsx',
    '<rootDir>/src/tests/rtlTestUtils.ts',
    '<rootDir>/src/services/logger/',
    '<rootDir>/src/services/monitoring/',
    '<rootDir>/src/services/firebase/',
    '<rootDir>/src/services/analytics/',
    '<rootDir>/src/utils/log/index.ts',
    '<rootDir>/src/reportWebVitals.ts',
    '<rootDir>/src/registerServiceWorker.ts',
    '<rootDir>/src/stories',
    '<rootDir>/src/*.stories.tsx',
    '<rootDir>/src/*.stories.@(js|jsx|ts|tsx)',
    '<rootDir>/src/types/',
    '<rootDir>/src/index.tsx',
    '<rootDir>/src/styles/',
    '<rootDir>/src/config/',
    '<rootDir>/src/api/rest/dto.ts',
    '<rootDir>/src/store/rootReducer.ts',
    '<rootDir>/src/store/index.ts',
    '<rootDir>/src/routes/PrivateRoute.tsx',
    'types.ts',
    'styles.ts',
    'styles.js',
    '.styles.ts',
    '.styles.jsx',
    '.styles.js',
    '.styles.jsx',
    'styles.jsx',
    'styles.tsx',
    'style.ts',
    'style.js',
    'state.ts',
    'data.ts',
    'data.js',
    'constants.js',
    'constants.ts',
    'initialState.ts',
    '.stories.tsx',
    '.stories.jsx',
    '.stories.js',
    '.stories.ts',
    '.story.tsx',
    '.story.ts',
    '.interface.ts',
    '.interface.js',
    '.interface.jsx',
    '.interface.tsx',
    '.d.ts',
    '.props.ts',
    '.props.js',
    '.props.jsx',
    'actionTypes.ts',
    'mockData.ts',
    'mockData.js',
    'actions.ts',
    'actionCreators.ts',
    '<rootDir>/src/utils/constants.ts',
    '<rootDir>/src/hooks/useAppDispatch.ts',
    '<rootDir>/src/hooks/useAppSelector.ts',
    '<rootDir>/src/setupProxy.js',
    '<rootDir>/src/test',
    '<rootDir>/src/api/rest/RestClient.ts',
    'exceptions.ts',
    'rootReducer.ts',
    'rootReducer.js',
    'slice.js',
    'slice.ts',
    'routes.ts',
    'routes.js',
    'mediaQueries.ts',
    'index.ts',
  ],
  setupFiles: [
    'react-app-polyfill/jsdom',
    '<rootDir>/config/mocks/browserMock.js',
    '<rootDir>/config/mocks/axios.js',
    '<rootDir>/config/mocks/intersectionObserver.js',
    '<rootDir>/config/mocks/reactRouterDom.js',
  ],
  setupFilesAfterEnv: ['<rootDir>/scripts/ts/setupTests.ts'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  testEnvironment: 'jsdom',
  testRunner: '/Users/lusina/Projects/brianlusina/portfolio/node_modules/jest-circus/runner.js',
  transform: {
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  modulePaths: [],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^@app': '<rootDir>/src/App.tsx',
    '^@config': '<rootDir>/src/config/index.ts',
    '^@apiConfig': '<rootDir>/src/config/api.ts',
    '^@graphQl/(.*)$': '<rootDir>/src/api/graphql/$1',
    '^@graphQlClient': '<rootDir>/src/api/graphql/GraphqlClient.ts',
    '^providers/(.*)$': '<rootDir>/src/providers/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^containers/(.*)$': '<rootDir>/src/containers/$1',
  },
  moduleFileExtensions: [
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  resetMocks: true,
  coverageThreshold: {
    global: {
      lines: 85,
      statements: 85,
    },
  },
};
