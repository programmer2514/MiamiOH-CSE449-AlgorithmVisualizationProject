import { useContext } from 'react';

import { Typography } from '@material-tailwind/react';

import { type VisData } from '../../types';

import DarkModeContext from '../../contexts/DarkModeContext';

/**
 * Renders each step of the visualizer animation.
 *
 * @param {Object} props
 *        React props
 */
export default function VisRenderer(
  {
    data,
  }:
  {
    data: VisData
  },
) {
  const isDark = useContext(DarkModeContext);

  function resolveColor(color: string, type: string, isDark: boolean) {
    switch (color) {
      // -------------------------------------------------------------------- //
      case 'fg':
        return 'rgb(var(--color-primary) / 1)';

      // -------------------------------------------------------------------- //
      case 'yellow':
        switch (type) {
          case 'outline':
            return isDark ? 'goldenrod' : 'darkgoldenrod';
          default:
            return 'yellow';
        }

      // -------------------------------------------------------------------- //
      case 'green':
        switch (type) {
          case 'outline':
            return isDark ? 'limegreen' : 'green';
          case 'highlight':
            return isDark ? 'lime' : 'limegreen';
          default:
            return 'green';
        }

      // -------------------------------------------------------------------- //
      default:
        return color;
    }
  }

  switch (data.type) {
    // ---------------------------------------------------------------------- //
    case 'table':
      return (
        <>
          <div className="h-0 overflow-visible relative z-10">
            {
              Object.keys(data.marks).map(idx => (
                <>
                  {
                    data.marks[idx].map((val) => {
                      switch (val.type) {
                        // ------------------------------------------------ //
                        case 'outline':
                          return (
                            <div className="h-0 overflow-visible">
                              <div
                                style={{
                                  outlineColor: resolveColor(
                                    val.color,
                                    val.type,
                                    isDark,
                                  ),
                                  transform: `translateX(${6.125 * parseInt(idx)}rem)`,
                                }}
                                className="w-24 h-24 rounded-md outline-4"
                              />
                            </div>
                          );

                        // -------------------------------------------------- //
                        case 'highlight':
                          return (
                            <div className="h-0 overflow-visible">
                              <div
                                style={{
                                  backgroundColor: resolveColor(
                                    val.color,
                                    val.type,
                                    isDark,
                                  ),
                                  transform: `translateX(${6.125 * parseInt(idx)}rem)`,
                                }}
                                className="w-24 h-24 opacity-25"
                              />
                            </div>
                          );

                        // -------------------------------------------------- //
                        case 'greyout':
                          return (
                            <div className="h-0 overflow-visible">
                              <div
                                style={{
                                  transform: `translateX(${6.125 * parseInt(idx)}rem)`,
                                }}
                                className="w-24 h-24 bg-[#d8d8dc] dark:bg-[#38383c] opacity-50"
                              />
                            </div>
                          );

                        // -------------------------------------------------- //
                        case 'text':
                          return (
                            <div className="h-0 overflow-visible">
                              <Typography
                                type="h4"
                                className="text-2xl! font-medium text-center relative top-28"
                                style={{
                                  color: resolveColor(
                                    val.color,
                                    val.type,
                                    isDark,
                                  ),
                                  transform: `translateX(calc(${6.125 * parseInt(idx)}rem - 50% + 3rem))`,
                                }}
                              >
                                {val.value}
                              </Typography>
                            </div>
                          );

                          // ------------------------------------------------ //
                        default:
                          return <></>;
                      }
                    })
                  }
                </>
              ))
            }
          </div>

          <div className="flex rounded-md overflow-hidden outline-2 outline-[#d8d8dc] dark:outline-[#38383c] gap-0.5">
            {
              data.data.map((val, idx) => (
                <div
                  key={idx}
                  className="w-24 h-24 bg-[#ffffff] dark:bg-[#18181c] outline-2 outline-[#d8d8dc] dark:outline-[#38383c]"
                >
                  <Typography
                    type="h4"
                    className="text-4xl! text-center relative top-1/2 -translate-y-1/2"
                  >
                    {val}
                  </Typography>
                </div>
              ))
            }
          </div>
        </>
      );

    // ---------------------------------------------------------------------- //
    default:
      return (
        <Typography
          type="h4"
          className="text-4xl! text-center opacity-25"
        >
          Run the visualizer to see the animation
        </Typography>
      );
  }
}
