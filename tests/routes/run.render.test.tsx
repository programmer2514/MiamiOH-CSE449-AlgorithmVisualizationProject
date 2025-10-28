import { render } from 'vitest-browser-react';
import { expect, test, describe } from 'vitest';

import Run from '../../app/routes/run';

describe('Test route: run', async () => {
  test('Check that page is empty', async () => {
    const screen = await render(<Run />);

    await expect(screen.getByText(/\w+/i)).not.toBeInTheDocument();
  });
});
