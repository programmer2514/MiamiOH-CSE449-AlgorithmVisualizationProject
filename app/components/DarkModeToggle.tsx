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
export default function DarkModeToggle(
  {
    floating,
    isDark,
    setIsDark,
  }:
  {
    floating: boolean
    isDark: boolean | null
    setIsDark: ((value: boolean | null) => void)
  },
) {
  return (
    <div className="absolute bottom-2 left-2">
      <IconButton
        variant="ghost"
        aria-label={`${isDark ? 'Disable' : 'Enable'} Dark Mode`}
        title={`${isDark ? 'Disable' : 'Enable'} Dark Mode`}
        onClick={() => setIsDark(!(isDark || false))}
        className={`${floating ? 'opacity-50' : 'opacity-100'} hover:opacity-100 focus-visible:opacity-100 active:opacity-100 transition-opacity cursor-pointer`}
      >
        {
          (isDark || false) ?
            <HalfMoon className="h-6 w-6 stroke-2" /> :
            <SunLight className="h-6 w-6 stroke-2" />
        }
      </IconButton>
    </div>
  );
}
