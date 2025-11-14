import {
  useEffect,
  useState,
} from 'react';

/**
 * Provides a hook to read and edit page title state.
 */
export default function useTitle() {
  const [title, setTitle] = useState(null as string | null);

  useEffect(() => {
    if (title === null) return;
    localStorage.setItem('title', title);
  }, [title]);

  useEffect(() => {
    setTitle(localStorage.getItem('title') || '<unnamed>');
  }, []);

  return [title, setTitle] as const;
}
