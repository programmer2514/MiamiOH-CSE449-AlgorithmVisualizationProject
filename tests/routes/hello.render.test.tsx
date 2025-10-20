import { render } from 'vitest-browser-react';
import { expect, test, describe } from 'vitest';

import Hello from '../../app/routes/hello';

describe('Test route: hello', async () => {
  test('Check for \'Hello World\' text', async () => {
    const screen = render(<Hello />);

    await expect.element(screen.getByText(/Hello World/i)).toBeInTheDocument();
  });

  test('Check for lack of \'What\'s next\' text', async () => {
    const screen = render(<Hello />);

    await expect.element(screen.getByText(/What's next\?/i)).not.toBeInTheDocument();
  });
});
