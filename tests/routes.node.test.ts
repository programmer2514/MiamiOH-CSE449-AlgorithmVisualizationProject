import { expect, test, describe, assertType } from 'vitest';
import { type RouteConfig } from '@react-router/dev/routes';

import Routes from '../app/routes';

describe('Test route config', async () => {
  test('Ensure return is a valid RouteConfig object', async () => {
    await assertType<RouteConfig>(Routes);
  });

  test('Ensure at least one route is specified', async () => {
    expect(Routes.length).toBeGreaterThan(0);
  });

  test('Ensure the index route is unique', async () => {
    let indexRouteCount = 0;

    Routes.forEach(route => indexRouteCount += (route.index) ? 1 : 0);
    expect(indexRouteCount).toBe(1);
  });

  test('Ensure each route path matches its filename', async () => {
    Routes.forEach((route) => {
      if (route.index) {
        expect(route.file).toBe('routes/index.tsx');
      } else {
        expect(route.file).toBe(`routes/${route.path}.tsx`);
      }
    });
  });
});
