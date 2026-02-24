import { useEffect, useState } from 'react';

import {
  IconButton,
  Progress,
  Typography,
} from '@material-tailwind/react';

import {
  ArrowEmailForward,
  Minus,
  NavArrowLeft,
  NavArrowRight,
  PauseSolid,
  PlaySolid,
  Plus,
  PrecisionTool,
} from 'iconoir-react';

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
  const [offsetX, setOffsetX] = useState(0.0);
  const [offsetY, setOffsetY] = useState(0.0);

  const [dragging, setDragging] = useState(false);
  const [animating, setAnimating] = useState(null as NodeJS.Timeout | null);

  const [step, setStep] = useState(false);
  const [move, setMove] = useState(null as MouseEvent | TouchEvent | null);
  const [touch, setTouch] =
    useState(null as React.TouchEvent | TouchEvent | null);

  useEffect(() => {
    if (stepNum === numSteps && animating) {
      clearInterval(animating);
      setAnimating(null);
      return;
    }

    if (step) {
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

          if ((newDiff < oldDiff) && (zoom * 0.98 >= 0.1)) {
            setZoom(zoom * 0.98);
            setOffsetX(offsetX * 0.98);
            setOffsetY(offsetY * 0.98);
          } else if ((newDiff > oldDiff) && (zoom * 1.02 <= 40.0)) {
            setZoom(zoom * 1.02);
            setOffsetX(offsetX * 1.02);
            setOffsetY(offsetY * 1.02);
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

  return (
    <section className="w-full h-full">
      <div className="flex gap-1 items-center relative w-full h-0 overflow-visible px-2 justify-end z-20 translate-y-7 portrait:justify-center">
        <div className="w-64 max-w-full mx-1">
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
          <NavArrowLeft className="stroke-2 w-6 h-6" role="presentation" />
        </IconButton>
        <IconButton
          variant="ghost"
          aria-label="Step Forward"
          title="Step Forward"
          onClick={nextStep}
          className="cursor-pointer"
        >
          <NavArrowRight className="stroke-2 w-6 h-6" role="presentation" />
        </IconButton>
        <IconButton
          variant="ghost"
          aria-label={`${animating ? 'Pause' : 'Play'} Animation`}
          title={`${animating ? 'Pause' : 'Play'} Animation`}
          onClick={() => {
            if (animating) {
              clearInterval(animating);
              setAnimating(null);
              return;
            }

            setStep(true);
            setAnimating(
              setInterval(() => setStep(true), 1000),
            );
          }}
          className="cursor-pointer"
        >
          {
            animating ?
              <PauseSolid className="stroke-2 w-6 h-6" role="presentation" /> :
              <PlaySolid className="stroke-2 w-6 h-6" role="presentation" />
          }

        </IconButton>
        <IconButton
          variant="ghost"
          aria-label="Reset"
          title="Reset"
          onClick={() => {
            if (animating) clearInterval(animating);
            setAnimating(null);
            reset();
          }}
          className="cursor-pointer"
        >
          <ArrowEmailForward className="stroke-2 w-5 h-5 -scale-x-100" role="presentation" />
        </IconButton>
      </div>

      <div className="flex flex-col w-full h-full">
        <div
          onContextMenuCapture={e => e.preventDefault()}
          onWheel={(e) => {
            if ((e.deltaY > 0) && (zoom * 0.9 >= 0.1)) {
              setZoom(zoom * 0.9);
              setOffsetX(offsetX * 0.9);
              setOffsetY(offsetY * 0.9);
            } else if ((e.deltaY < 0) && (zoom * 1.1 <= 40.0)) {
              setZoom(zoom * 1.1);
              setOffsetX(offsetX * 1.1);
              setOffsetY(offsetY * 1.1);
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
            className="relative z-10 pointer-events-none transition-none w-min h-min top-1/2 left-1/2 translate-x-[calc(-50%+var(--offset-x))] translate-y-[calc(-50%+var(--offset-y))] scale-(--zoom)"
          >
            {children}
          </div>
        </div>

        {
          (offsetX !== 0.0 || offsetY !== 0.0) && (
            <div className="flex items-center relative w-full h-0 overflow-visible px-2 justify-end z-20 -translate-y-7">
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

        <div className="flex gap-1 items-center justify-end p-2 border-[#d8d8dc] dark:border-[#38383c] border-t bg-[#ffffff] dark:bg-[#18181c] portrait:justify-center">
          <div className="w-64 max-w-full mx-1">
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
            <ArrowEmailForward className="stroke-2 w-5 h-5 -scale-x-100" role="presentation" />
          </IconButton>
        </div>
      </div>
    </section>
  );
}
