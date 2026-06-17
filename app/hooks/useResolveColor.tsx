import { useContext } from 'react';

import DarkModeContext from '../contexts/DarkModeContext';

/**
 * Provides a hook to resolve a color string to a CSS-compatible color
 * string, taking into account the current dark mode state.
 */
export default function useResolveColor() {
  const isDark = useContext(DarkModeContext);

  function resolveColor(color: string, type: string) {
    switch (color) {
      case 'fg':
        return 'rgb(var(--color-primary) / 1)';

      case 'bg':
        return isDark ? '#1d1d20' : '#fafafc';

      case 'red':
        switch (type) {
          case 'outline':
            return 'firebrick';
          default:
            return 'red';
        }

      case 'orange':
        switch (type) {
          case 'outline':
            return 'darkorange';
          case 'highlight':
            return isDark ? 'darkorange' : 'orange';
          default:
            return 'orange';
        }

      case 'yellow':
        switch (type) {
          case 'outline':
            return 'goldenrod';
          case 'highlight':
            return 'gold';
          default:
            return 'yellow';
        }

      case 'green':
        switch (type) {
          case 'outline':
            return isDark ? 'limegreen' : 'green';
          case 'highlight':
            return isDark ? 'lime' : 'limegreen';
          default:
            return 'green';
        }

      case 'blue':
        switch (type) {
          case 'outline':
            return isDark ? 'royalblue' : 'blue';
          case 'highlight':
            return 'royalblue';
          default:
            return 'blue';
        }

      case 'purple':
        switch (type) {
          case 'outline':
            return isDark ? 'mediumpurple' : 'purple';
          case 'highlight':
            return isDark ? 'mediumorchid' : 'mediumpurple';
          default:
            return 'purple';
        }

      // By default, assume color is already a valid CSS color string
      default:
        return color;
    }
  }

  return [
    resolveColor,
  ];
}
