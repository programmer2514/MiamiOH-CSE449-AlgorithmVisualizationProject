import { render } from 'vitest-browser-react';
import { expect, test, describe } from 'vitest';

import Run from '../../app/routes/run';

describe('Test route: run', async () => {
  test.todo('TODO', async () => {
    const screen = await render(<Run />);

    await expect(screen).not.toBeNull();
  });
});
