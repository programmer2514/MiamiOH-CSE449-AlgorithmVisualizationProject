import {
  useEffect,
  useState,
} from 'react';

import {
  type Step,
  type VisData,
} from '../../types';

import VisRenderer from './VisRenderer';

import useResolveColor from '../../hooks/useResolveColor';

/**
 * Builds each step of the visualizer animation as a finite frame. Keeps track
 * of the previous frames so that the animation can be played in reverse.
 *
 * @param {Object} props
 *        React props
 * @param {number} props.zoom
 *        The current zoom level of the visualization
 * @param {number} props.offsetX
 *        The current x offset of the visualization
 * @param {number} props.offsetY
 *        The current y offset of the visualization
 * @param {Step} props.stepDat
 *        The current step data
 * @param {number} props.stepNum
 *        The current step number
 */
export default function VisBuilder(
  {
    zoom,
    offsetX,
    offsetY,
    stepDat,
    stepNum,
  }:
  {
    zoom: number | null
    offsetX: number
    offsetY: number
    stepDat: Step
    stepNum: number
  },
) {
  const [data, setData] = useState(
    {
      data: [],
      type: '',
      logs: [],
      marks: {},
    } as VisData,
  );
  const [prevData, setPrevData] = useState([] as VisData[]);
  const [prevNum, setPrevNum] = useState(stepNum);

  const [resolveColor] = useResolveColor();

  useEffect(() => {
    const temp_data = JSON.parse(JSON.stringify(data));
    const prev_data = JSON.parse(JSON.stringify(prevData));

    if (stepNum < prevNum) {
      setData(prev_data[stepNum]);

      prev_data.splice(stepNum + 1);
      setPrevData(prev_data);
      setPrevNum(stepNum);

      return;
    }

    const filtered_dat = stepDat.actions
      ?.filter(action => action.cmd.startsWith('vis'));

    if (filtered_dat) {
      for (const action of filtered_dat) {
        switch (action.cmd) {
          case 'vis_init':
            temp_data.data = action.params.data;
            temp_data.type = action.params.type;
            break;

          case 'vis_log':
            temp_data.logs.push(action.params);
            break;

          case 'vis_mark':
            {
              const idx = action.params.index;

              if (!temp_data.marks[idx]) {
                temp_data.marks[idx] = [];
              }

              // Remove all marks of the same type from the same index
              for (let i = 0; i < temp_data.marks[idx].length; i++) {
                if (
                  temp_data.marks[idx][i].type === action.params.type || (
                    temp_data.marks[idx][i].type === 'greyout' &&
                    action.params.type === 'highlight'
                  ) || (
                    temp_data.marks[idx][i].type === 'highlight' &&
                    action.params.type === 'greyout'
                  )
                ) {
                  temp_data.marks[idx].splice(i, 1);
                }
              }

              // Remove all marks of the same type and color from other indexes
              for (const key in temp_data.marks) {
                if (key !== idx) {
                  for (let i = 0; i < temp_data.marks[key].length; i++) {
                    if (
                      temp_data.marks[key][i].type === action.params.type &&
                      temp_data.marks[key][i].color === action.params.color &&
                      temp_data.marks[key][i].type !== 'greyout'
                    ) {
                      temp_data.marks[key].splice(i, 1);
                    }
                  }
                }
              }

              temp_data.marks[idx].push({
                type: action.params.type,
                color: action.params.color,
                value: action.params.value || '',
              });
            }
            break;

          case 'vis_unmark':
            {
              const idx = action.params.index;

              if (action.params.type === 'all') {
                temp_data.marks[idx] = [];
                break;
              }

              for (let i = 0; i < temp_data.marks[idx].length; i++) {
                if (temp_data.marks[idx][i].type === action.params.type) {
                  temp_data.marks[idx].splice(i, 1);
                }
              }
            }
            break;

          case 'vis_insert':
            temp_data.data.splice(action.params.index, 0, action.params.value);
            break;

          case 'vis_delete':
            temp_data.data.splice(action.params.index, 1);
            break;

          case 'vis_update':
            temp_data.data[action.params.index] = action.params.value;
            break;

          case 'vis_swap':
            {
              const idx = action.params.index;
              const idx2 = action.params.index2;

              const temp = temp_data.data[idx];
              temp_data.data[idx] = temp_data.data[idx2];
              temp_data.data[idx2] = temp;
            }
            break;

          case 'vis_sort': // TODO: Make sure this works
            temp_data.data.sort((a: any, b: any) => a - b);
            break;

          default: // This should never happen
            alert(JSON.stringify(action, null, 2));
            break;
        }
      }
    }

    prev_data.push(temp_data);
    setData(temp_data);
    setPrevData(prev_data);
    setPrevNum(stepNum);
  }, [stepNum]);

  return (
    <>
      <div className="flex flex-col justify-end items-end h-full w-full px-4 py-16 text-lg">
        {
          data.logs.map((val, idx) => {
            return (
              <p
                className="text-right font-bold"
                style={{
                  color: resolveColor(val.level, 'log'),
                  opacity: 1 / (data.logs.length - idx),
                }}
                key={idx}
              >
                {val.text}
              </p>
            );
          })
        }
      </div>
      <div
        style={{
          '--zoom': `${zoom}`,
          '--offset-x': `${offsetX}px`,
          '--offset-y': `${offsetY}px`,
        } as React.CSSProperties}
        className="relative z-10 pointer-events-none transition-none! w-min h-min -top-1/2 left-1/2 translate-x-[calc(-50%+var(--offset-x))] translate-y-[calc(-50%+var(--offset-y))] scale-(--zoom)"
      >
        <VisRenderer data={data} />
      </div>
    </>
  );
}
