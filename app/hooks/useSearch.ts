import {
  useEffect,
  useState,
} from 'react';

/**
 * Provides a hook to read and edit search state.
 */
export default function useSearch() {
  const [favs, setFavs] = useState(
    () => {
      if (typeof window === 'undefined') return [];
      return JSON.parse(localStorage?.getItem('favs') || '[]');
    },
  );

  const [activeTags, setActiveTags] = useState(
    () => {
      if (typeof window === 'undefined') return [];
      return JSON.parse(localStorage?.getItem('activeTags') || '[]');
    },
  );

  const [sort, setSort] = useState(
    () => {
      if (typeof window === 'undefined') return 'favorites';
      return localStorage?.getItem('sort') || 'favorites';
    },
  );

  const [search, setSearch] = useState(
    () => {
      if (typeof window === 'undefined') return '';
      return localStorage?.getItem('search') || '';
    },
  );

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favs));
    localStorage.setItem('activeTags', JSON.stringify(activeTags));
    localStorage.setItem('sort', sort);
    localStorage.setItem('search', search);
  }, [favs, activeTags, sort, search]);

  return [
    favs,
    activeTags,
    sort,
    search,
    setFavs,
    setActiveTags,
    setSort,
    setSearch,
  ] as const;
}
