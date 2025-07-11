/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import { createDefaultEsmPreset } from 'ts-jest';

const tsJestPreset = createDefaultEsmPreset();

export default {
  ...tsJestPreset,
  moduleNameMapper: { '\\.(css|svg)$': '<rootDir>/tests/setup/mock.jest.ts' },
  setupFilesAfterEnv: [
    './tests/setup/setup.jest.ts',
  ],
  testEnvironment: 'jsdom',
};
