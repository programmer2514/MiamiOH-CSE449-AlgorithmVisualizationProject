import { expect, test, describe, assertType } from 'vitest';

import { type RouteConfig } from '@react-router/dev/routes';

import Routes from '../app/routes';

describe('Test route config', async () => {
  test('Ensure return is a valid RouteConfig object', async () => {
    await assertType<RouteConfig>(Routes);
  });

  test('Ensure that exactly one index route is specified', async () => {
    let indexRouteCount = 0;

    Routes.forEach(route => indexRouteCount += (route.index) ? 1 : 0);

    expect(indexRouteCount).toBe(1);
  });
});
