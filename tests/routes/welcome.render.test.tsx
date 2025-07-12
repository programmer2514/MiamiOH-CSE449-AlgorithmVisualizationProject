import { render } from 'vitest-browser-react';
import { expect, test, describe } from 'vitest';

import Home from '../../app/routes/index';

describe('Test component: welcome', async () => {
  test('Check for \'What\'s next\' text', async () => {
    const screen = render(<Home />);

    await expect.element(screen.getByText(/What's next\?/i)).toBeInTheDocument();
  });
});
