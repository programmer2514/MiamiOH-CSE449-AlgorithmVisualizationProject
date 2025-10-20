import { render } from 'vitest-browser-react';
import { expect, test, describe } from 'vitest';

import Index from '../../app/routes/index';

describe('Test route: index', async () => {
  test('Check for \'What\'s next\' text', async () => {
    const screen = render(<Index />);

    await expect.element(screen.getByText(/What's next\?/i)).toBeInTheDocument();
  });
});
