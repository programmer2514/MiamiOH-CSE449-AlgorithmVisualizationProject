import { render } from 'vitest-browser-react';
import { expect, test, describe } from 'vitest';

import Index from '../../app/routes/index';

describe('Test route: index', async () => {
  test('Check that placeholder text is present', async () => {
    const screen = await render(<Index />);

    await expect(screen.getByText(/Getting Started Page/i)).toBeInTheDocument();
  });
});
