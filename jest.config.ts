import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  automock: false,
  resetMocks: false,
  moduleNameMapper: {
    "^~(.*)$": "<rootDir>/src/$1",
    "\\.(scss|sass|css)$": "identity-obj-proxy"
  },
  "setupFilesAfterEnv": [
    "./setupJest.ts"
  ],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};

export default config;
