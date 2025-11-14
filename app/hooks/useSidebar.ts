import {
  useEffect,
  useState,
} from 'react';

/**
 * Provides a hook to read and edit sidebar toggle and width states.
 */
export default function useSidebar() {
  const [sidebar, setSidebar] = useState(null as boolean | null);
  const [sidebarWidth, setSidebarWidth] = useState(null as number | null);
  const [sidebarDefaultWidth, setSidebarDefaultWidth] = useState(0);
  const [sidebarMinWidth, setSidebarMinWidth] = useState(0);
  const [sidebarMaxWidth, setSidebarMaxWidth] = useState(0);

  useEffect(() => {
    if (sidebar === null) return;
    localStorage.setItem('sidebar', sidebar.toString());
  }, [sidebar]);

  useEffect(() => {
    if (sidebarWidth === null) return;
    localStorage.setItem('sidebarWidth', sidebarWidth.toString());
  }, [sidebarWidth]);

  useEffect(() => {
    setSidebar(
      (localStorage.getItem('sidebar') === null) ?
        true :
        localStorage.getItem('sidebar') === 'true',
    );

    setSidebarWidth(
      parseInt(
        localStorage.getItem('sidebarWidth') ||
        (window.innerWidth / 3).toString(),
      ),
    );

    setSidebarDefaultWidth(window.innerWidth / 3);
    setSidebarMinWidth(window.innerWidth / 6);
    setSidebarMaxWidth(window.innerWidth * 3 / 4);
  }, []);

  return [
    sidebar,
    setSidebar,
    sidebarDefaultWidth,
    sidebarMinWidth,
    sidebarMaxWidth,
    sidebarWidth,
    setSidebarWidth,
  ] as const;
}
