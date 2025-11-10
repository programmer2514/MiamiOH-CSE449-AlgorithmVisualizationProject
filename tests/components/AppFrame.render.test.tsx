import { render } from 'vitest-browser-react';
import { expect, test, describe } from 'vitest';

import AppFrame from '../../app/components/AppFrame';

function Test() {
  return (
    <AppFrame
      title=""
      setTitle={undefined}
      mutable={false}
      sidebar={undefined}
      setSidebar={undefined}
      menuLinks={[]}
    >
      <p>Test</p>
    </AppFrame>
  );
};

describe('Test component: <AppFrame />', async () => {
  test('Ensure child elements are rendered', async () => {
    const screen = await render(<Test />);

    await expect(screen.baseElement.querySelector('main p')).toHaveTextContent('Test');
  });

  test('Ensure TopBar is rendered', async () => {
    const screen = await render(<Test />);

    await expect(screen.baseElement.querySelector('header nav')).toBeInTheDocument();
  });

  test('Ensure MainMenu is rendered', async () => {
    const screen = await render(<Test />);

    await expect(screen.baseElement.querySelector('body button[aria-haspopup]')).toBeInTheDocument();
  });

  test('Ensure DarkModeToggle is rendered', async () => {
    const screen = await render(<Test />);

    await expect(screen.baseElement.querySelector('footer button[aria-label="Toggle Dark Mode"]')).toBeInTheDocument();
  });

  test('Ensure TopBar can open and close MainMenu', async () => {
    const screen = await render(<Test />);

    await (screen.baseElement.querySelector('header nav button[aria-label="Main Menu"]') as HTMLButtonElement | null)?.click();
    await expect(screen.baseElement.querySelector('nav > ul')).toBeInTheDocument();

    await (screen.baseElement.querySelector('header nav button[aria-label="Main Menu"]') as HTMLButtonElement | null)?.click();
    await expect(screen.baseElement.querySelector('nav > ul')).not.toBeInTheDocument();
  });
});
