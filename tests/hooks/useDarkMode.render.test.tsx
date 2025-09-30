import { render } from 'vitest-browser-react';
import { expect, test, describe } from 'vitest';

import useDarkMode from '../../app/hooks/useDarkMode';

function Test() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <>
      <p>{isDark.toString()}</p>
      <button onClick={() => setIsDark(true)}>Enable</button>
      <button onClick={() => setIsDark(false)}>Disable</button>
    </>
  );
};

describe('Test hook: useDarkMode()', async () => {
  test('Check if \'isDark\' is a boolean', async () => {
    const screen = render(<Test />);

    await expect.element(screen.getByText(/(true|false)/i)).toBeInTheDocument();
  });

  test('Enable dark mode', async () => {
    const screen = render(<Test />);

    await screen.getByText(/Enable/i).click();
    await expect.element(screen.getByText(/true/i)).toBeInTheDocument();
    await expect(screen.baseElement.classList.contains('dark')).toBe(true);
  });

  test('Disable dark mode', async () => {
    const screen = render(<Test />);

    await screen.getByText(/Disable/i).click();
    await expect.element(screen.getByText(/false/i)).toBeInTheDocument();
    await expect(screen.baseElement.classList.contains('dark')).toBe(false);
  });
});
