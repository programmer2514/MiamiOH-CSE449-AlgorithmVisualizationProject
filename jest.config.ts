/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
  moduleNameMapper: { '\\.(css|svg)$': '<rootDir>/tests/mock.jest.ts' },
  preset: 'ts-jest/presets/default-esm',
  setupFilesAfterEnv: [
    './tests/setup.jest.ts',
  ],
  testEnvironment: 'jsdom',
};

export default config;
