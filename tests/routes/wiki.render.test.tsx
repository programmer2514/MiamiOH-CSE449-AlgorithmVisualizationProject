import { render } from 'vitest-browser-react';
import { expect, test, describe } from 'vitest';

import Wiki from '../../app/routes/wiki';

describe('Test route: wiki', async () => {
  test('Check that page is empty', async () => {
    const screen = render(<Wiki />);

    await expect.element(screen.getByText(/\w+/i)).not.toBeInTheDocument();
  });
});
