import {
  useEffect,
  useState,
} from 'react';

import {
  HalfMoon,
  SunLight,
} from 'iconoir-react';

import { IconButton } from '@material-tailwind/react';

/**
 * Renders the dark mode toggle button.
 *
 * @param {Object} props
 *        React props
 * @param {boolean} props.floating
 *        Whether the button should be floating or not
 */
export default function DarkModeToggle({ floating }: { floating: boolean }) {
  // Use system color scheme to init app color scheme on load
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.theme === 'dark' ||
        (
          !('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
        )
      );
    }

    return false;
  });

  useEffect(() => {
    // Toggle app dark mode (use Tailwind styles prefixed with dark:)
    if (isDark) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className={`${floating ? 'opacity-50' : 'opacity-100'} absolute bottom-2 left-2 hover:opacity-100 active:opacity-100 transition-opacity`}>
      <IconButton
        variant="ghost"
        aria-label="Toggle Dark Mode"
        onClick={() => setIsDark(!isDark)}
        className="cursor-pointer"
      >
        {
          isDark ?
            <HalfMoon className="h-6 w-6 stroke-2" /> :
            <SunLight className="h-6 w-6 stroke-2" />
        }
      </IconButton>
    </div>
  );
}
