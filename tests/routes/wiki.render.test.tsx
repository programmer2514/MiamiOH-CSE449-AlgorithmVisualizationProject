import { render } from 'vitest-browser-react';
import { expect, test, describe } from 'vitest';

import Wiki from '../../app/routes/wiki';

describe('Test route: wiki', async () => {
  test('Check for \'What\'s next\' text', async () => {
    const screen = render(<Wiki />);

    await expect.element(screen.getByText(/What's next\?/i)).toBeInTheDocument();
  });
});
