import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    !process.env.VITEST && reactRouter(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  test: {
    projects: [
      {
        test: {
          name: 'node',
          include: [
            '**/*.node.test.{ts,tsx}',
          ],
        },
      },
      {
        test: {
          name: 'browser',
          include: [
            '**/*.render.test.{ts,tsx}',
          ],
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            screenshotDirectory: 'screenshots',
            instances: [
              { browser: 'chromium' },
              { browser: 'firefox' },
              { browser: 'webkit' },
            ],
          },
        },
      },
    ],
  },
});
