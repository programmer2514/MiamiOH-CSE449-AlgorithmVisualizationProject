import { useEffect, useState } from 'react';

import {
  IconButton,
  Progress,
  Typography,
} from '@material-tailwind/react';

import {
  UndoAction,
  Forward,
  Minus,
  NavArrowLeft,
  NavArrowRight,
  Pause,
  Play,
  Plus,
  PrecisionTool,
  Rewind,
} from 'iconoir-react';

// In ms
const TICK_SPEED = 10;
const DEFAULT_SPEED = 1000;

// Multipliers of DEFAULT_SPEED
const SPEEDS = [
  0.1, 0.25, 0.33, 0.5,
  0.66, 0.75, 0.9, 1.0,
  1.1, 1.25, 1.5, 1.75,
  2, 2.5, 3, 3.5, 4, 5,
  10,
];

/**
 * Renders the main visualization frame around the passed child elements.
 * Provides step, view, and zoom controls to control and resize contents.
 *
 * @param {Object} props
 *        React props
 * @param {number} props.numSteps
 *        The number of steps in the visualization
 * @param {number} props.stepNum
 *        The current step number
 * @param {function} props.prevStep
 *        A function to go to the previous step
 * @param {function} props.nextStep
 *        A function to go to the next step
 * @param {function} props.reset
 *        A function to reset the visualization
 * @param {React.ReactNode} props.children
 *        Child elements
 */
export default function VisWindowFrame(
  {
    numSteps,
    stepNum,
    prevStep,
    nextStep,
    reset,
    children,
  }:
  {
    numSteps: number
    stepNum: number
    prevStep: () => void
    nextStep: () => void
    reset: () => void
    children: React.ReactNode
  },
) {
  const [zoom, setZoom] = useState(1.0);
  const [speed, setSpeed] = useState(DEFAULT_SPEED);
  const [offsetX, setOffsetX] = useState(0.0);
  const [offsetY, setOffsetY] = useState(0.0);

  const [dragging, setDragging] = useState(false);

  const [time, setTime] = useState(0);
  const [timeStep, setTimeStep] = useState(null as NodeJS.Timeout | null);

  const [step, setStep] = useState(false);
  const [move, setMove] = useState(null as MouseEvent | TouchEvent | null);
  const [touch, setTouch] =
    useState(null as React.TouchEvent | TouchEvent | null);

  useEffect(() => {
    if (time > 0) {
      if ((time - TICK_SPEED) %
        (Math.round(speed / TICK_SPEED) * TICK_SPEED) === 0
      ) {
        setStep(true);
      }

      setTimeStep(
        setTimeout(() => setTime(time + TICK_SPEED), TICK_SPEED),
      );
    } else {
      if (timeStep) {
        clearTimeout(timeStep);
        setStep(false);
      }
    }
  }, [time]);

  useEffect(() => {
    if (step) {
      if (stepNum === numSteps) {
        setTime(0);
        return;
      }

      nextStep();
      setStep(false);
    }
  }, [step]);

  useEffect(() => {
    if (move && dragging) {
      if (touch) {
        if ((move as TouchEvent).touches.length === 2) {
          if (touch.touches.length !== 2) return;

          const oldTouch1 = (touch as TouchEvent).touches[0];
          const oldTouch2 = (touch as TouchEvent).touches[1];
          const newTouch1 = (move as TouchEvent).touches[0];
          const newTouch2 = (move as TouchEvent).touches[1];

          const oldDiff = Math.hypot(
            oldTouch1.pageX - oldTouch2.pageX,
            oldTouch1.pageY - oldTouch2.pageY,
          );
          const newDiff = Math.hypot(
            newTouch1.pageX - newTouch2.pageX,
            newTouch1.pageY - newTouch2.pageY,
          );

          if (newDiff === oldDiff) return;

          const diff = Math.abs(newDiff - oldDiff);
          if ((newDiff < oldDiff) && (zoom * Math.pow(0.99, diff) >= 0.1)) {
            setZoom(zoom * Math.pow(0.99, diff));
            setOffsetX(offsetX * Math.pow(0.99, diff));
            setOffsetY(offsetY * Math.pow(0.99, diff));
          } else if (
            (newDiff > oldDiff) && (zoom * Math.pow(1.01, diff) <= 40.0)
          ) {
            setZoom(zoom * Math.pow(1.01, diff));
            setOffsetX(offsetX * Math.pow(1.01, diff));
            setOffsetY(offsetY * Math.pow(1.01, diff));
          }
          setTouch(move as TouchEvent);

          return;
        }

        if (
          (move as TouchEvent).touches.length !== 1 ||
          touch.touches.length !== 1
        ) return;

        const oldTouch = (touch as TouchEvent).touches[0];
        const newTouch = (move as TouchEvent).touches[0];

        setOffsetX(offsetX + newTouch.pageX - oldTouch.pageX);
        setOffsetY(offsetY + newTouch.pageY - oldTouch.pageY);

        setTouch(move as TouchEvent);
      } else {
        setOffsetX(offsetX + (move as MouseEvent).movementX);
        setOffsetY(offsetY + (move as MouseEvent).movementY);
      }

      setMove(null);
    }
  }, [move, dragging]);

  function mouseUp() {
    setDragging(false);

    removeEventListener('mouseup', mouseUp);
    removeEventListener('mousemove', mouseMove);

    removeEventListener('touchmove', mouseMove);
    removeEventListener('touchend', mouseUp);

    setTouch(null);
  }

  function mouseMove(e: MouseEvent | TouchEvent) {
    setMove(e);
  }

  function mouseDown(e: React.MouseEvent | React.TouchEvent) {
    const isTouch = Object.keys(e).includes('touches');

    if (
      (!isTouch) &&
      (e as React.MouseEvent).button !== 0 &&
      (e as React.MouseEvent).button !== 1
    ) return;

    if (isTouch) {
      addEventListener('touchend', mouseUp);
      addEventListener('touchmove', mouseMove);

      setTouch(e as React.TouchEvent);
    } else {
      addEventListener('mouseup', mouseUp);
      addEventListener('mousemove', mouseMove);
    }

    setDragging(true);
    e.preventDefault();
  }

  function getNextSpeed(speed: number, dir: number) {
    const idx = SPEEDS
      .findIndex(s => s == DEFAULT_SPEED / speed) + ((dir > 0) ? 1 : -1);

    return (idx >= 0 && idx < SPEEDS.length) ?
      DEFAULT_SPEED / SPEEDS[idx] :
      speed;
  }

  return (
    <section className="w-full h-full">
      <div className="flex gap-1 items-center relative w-full h-0 overflow-visible px-2 justify-end z-20 translate-y-7 portrait:justify-center">
        <IconButton
          variant="ghost"
          aria-label={`${time > 0 ? 'Pause' : 'Play'} Animation`}
          title={`${time > 0 ? 'Pause' : 'Play'} Animation`}
          onClick={() => {
            setTime(time > 0 ? 0 : TICK_SPEED);
          }}
          className="cursor-pointer"
        >
          {
            time > 0 ?
              <Pause className="stroke-2 w-6 h-6" role="presentation" /> :
              <Play className="stroke-2 w-6 h-6" role="presentation" />
          }

        </IconButton>
        <div className="w-64 max-w-full mx-0.5">
          <Progress
            value={stepNum / numSteps * 100}
            className="rounded-lg h-8 w-full border border-[#d8d8dc] dark:border-[#38383c] bg-[#ffffff] dark:bg-[#18181c]"
          >
            <Progress.Bar className="bg-[dodgerblue]" />
          </Progress>
          <Typography className="text-base font-medium pointer-events-none relative text-center w-full h-0 overflow-visible z-30 -translate-y-7">
            {`Step: ${stepNum} / ${numSteps}`}
          </Typography>
        </div>
        <IconButton
          variant="ghost"
          aria-label="Step Backward"
          title="Step Backward"
          onClick={prevStep}
          className="cursor-pointer"
        >
          <NavArrowLeft className="stroke-2 w-6.5 h-6.5" role="presentation" />
        </IconButton>
        <IconButton
          variant="ghost"
          aria-label="Step Forward"
          title="Step Forward"
          onClick={nextStep}
          className="cursor-pointer"
        >
          <NavArrowRight className="stroke-2 w-6.5 h-6.5" role="presentation" />
        </IconButton>
        <IconButton
          variant="ghost"
          aria-label="Reset"
          title="Reset"
          onClick={() => {
            setTime(0);
            reset();
          }}
          className="cursor-pointer"
        >
          <UndoAction className="stroke-2 w-6 h-6" role="presentation" />
        </IconButton>
      </div>

      <div className="flex flex-col w-full h-full">
        <div
          onContextMenuCapture={e => e.preventDefault()}
          onWheel={(e) => {
            if ((e.deltaY > 0) && (zoom * 0.95 >= 0.1)) {
              setZoom(zoom * 0.95);
              setOffsetX(offsetX * 0.95);
              setOffsetY(offsetY * 0.95);
            } else if ((e.deltaY < 0) && (zoom * 1.05 <= 40.0)) {
              setZoom(zoom * 1.05);
              setOffsetX(offsetX * 1.05);
              setOffsetY(offsetY * 1.05);
            }
          }}
          onMouseDownCapture={mouseDown}
          onTouchStartCapture={mouseDown}
          style={{
            cursor: dragging ? 'grabbing' : 'grab',
          }}
          className="w-full grow overflow-hidden"
        >
          <div
            style={{
              '--zoom': `${zoom}`,
              '--offset-x': `${offsetX}px`,
              '--offset-y': `${offsetY}px`,
            } as React.CSSProperties}
            className="relative z-10 pointer-events-none transition-none! w-min h-min top-1/2 left-1/2 translate-x-[calc(-50%+var(--offset-x))] translate-y-[calc(-50%+var(--offset-y))] scale-(--zoom)"
          >
            {children}
          </div>
        </div>

        {
          (offsetX !== 0.0 || offsetY !== 0.0) && (
            <div className="flex items-center w-full h-0 overflow-visible px-2 z-20 relative justify-start -translate-y-7 portrait:absolute portrait:justify-end portrait:-translate-y-7 portrait:-translate-x-10.5">
              <IconButton
                variant="ghost"
                aria-label="Re-center View"
                title="Re-center View"
                onClick={() => {
                  setOffsetX(0.0);
                  setOffsetY(0.0);
                }}
                className="opacity-50 hover:opacity-100 focus-visible:opacity-100 active:opacity-100 transition-opacity cursor-pointer"
              >
                <PrecisionTool className="stroke-2 w-6 h-6 -scale-x-100" role="presentation" />
              </IconButton>
            </div>
          )
        }

        <div className="flex gap-1 items-center relative w-full h-0 overflow-visible px-2 justify-end z-20 -translate-y-7 portrait:justify-center">
          <div className="w-64 max-w-full mx-0.5">
            <Progress
              value={
                ((speed >= DEFAULT_SPEED) ?
                  (DEFAULT_SPEED / speed) / 2 :
                  (0.5 + (DEFAULT_SPEED / speed) / 20)) * 100
              }
              className="rounded-lg h-8 w-full border border-[#d8d8dc] dark:border-[#38383c] bg-[#ffffff] dark:bg-[#18181c]"
            >
              <Progress.Bar className="bg-[dodgerblue]" />
            </Progress>
            <Typography className="text-base font-medium pointer-events-none relative text-center w-full h-0 overflow-visible z-30 -translate-y-7">
              {`Speed: ${DEFAULT_SPEED / speed}x`}
            </Typography>
          </div>
          <IconButton
            variant="ghost"
            aria-label="Decrease Speed"
            title="Decrease Speed"
            onClick={() => setSpeed(getNextSpeed(speed, -1))}
            className="cursor-pointer"
          >
            <Rewind className="stroke-2 w-5.5 h-5.5" role="presentation" />
          </IconButton>
          <IconButton
            variant="ghost"
            aria-label="Increase Speed"
            title="Increase Speed"
            onClick={() => setSpeed(getNextSpeed(speed, 1))}
            className="cursor-pointer"
          >
            <Forward className="stroke-2 w-5.5 h-5.5" role="presentation" />
          </IconButton>
          <IconButton
            variant="ghost"
            aria-label="Reset Speed"
            title="Reset Speed"
            onClick={() => setSpeed(DEFAULT_SPEED)}
            className="cursor-pointer"
          >
            <UndoAction className="stroke-2 w-6 h-6" role="presentation" />
          </IconButton>
        </div>

        <div className="flex gap-1 items-center justify-end p-2 border-[#d8d8dc] dark:border-[#38383c] border-t bg-[#ffffff] dark:bg-[#18181c] portrait:justify-center">
          <div className="w-64 max-w-full mx-0.5">
            <Progress
              value={((zoom <= 1) ? zoom / 2 : (0.5 + ((zoom - 1) / 8))) * 100}
              className="rounded-lg h-8 w-full border border-[#d8d8dc] dark:border-[#38383c] bg-[#ffffff] dark:bg-[#18181c]"
            >
              <Progress.Bar className="bg-[dodgerblue]" />
            </Progress>
            <Typography className="text-base font-medium pointer-events-none relative text-center w-full h-0 overflow-visible z-30 -translate-y-7">
              {`Zoom: ${Math.round(zoom * 100)}%`}
            </Typography>
          </div>
          <IconButton
            variant="ghost"
            aria-label="Zoom Out"
            title="Zoom Out"
            onClick={() => setZoom((zoom - 0.1 >= 0.1) ? zoom - 0.1 : 0.1)}
            className="cursor-pointer"
          >
            <Minus className="stroke-2 w-6 h-6" role="presentation" />
          </IconButton>
          <IconButton
            variant="ghost"
            aria-label="Zoom In"
            title="Zoom In"
            onClick={() => setZoom((zoom + 0.1 <= 40.0) ? zoom + 0.1 : 40.0)}
            className="cursor-pointer"
          >
            <Plus className="stroke-2 w-6 h-6" role="presentation" />
          </IconButton>
          <IconButton
            variant="ghost"
            aria-label="Reset Zoom"
            title="Reset Zoom"
            onClick={() => setZoom(1.0)}
            className="cursor-pointer"
          >
            <UndoAction className="stroke-2 w-6 h-6" role="presentation" />
          </IconButton>
        </div>
      </div>
    </section>
  );
}
