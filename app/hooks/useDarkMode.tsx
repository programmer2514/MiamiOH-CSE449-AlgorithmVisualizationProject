import { useEffect, useState } from 'react';

export default function useDarkMode() {
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
    if (isDark) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return [isDark, setIsDark] as const;
}
