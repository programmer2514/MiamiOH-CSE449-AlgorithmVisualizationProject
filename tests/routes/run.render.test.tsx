import { render } from 'vitest-browser-react';
import { expect, test, describe } from 'vitest';

import Run from '../../app/routes/run';

describe('Test route: run', async () => {
  test('Check for \'What\'s next\' text', async () => {
    const screen = render(<Run />);

    await expect.element(screen.getByText(/What's next\?/i)).toBeInTheDocument();
  });
});
