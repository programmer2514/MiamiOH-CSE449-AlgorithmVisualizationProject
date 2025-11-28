/**
 * Renders the visualization pane for the visualizer.
 *
 * @param {Object} props
 *        React props
 * @param {number} props.numSteps
 *        The number of steps in the visualization
 * @param {number} props.stepNum
 *        The current step number
 * @param {object} props.stepDat
 *        The current step data
 * @param {function} props.prevStep
 *        A function to go to the previous step
 * @param {function} props.nextStep
 *        A function to go to the next step
 * @param {function} props.reset
 *        A function to reset the visualization
 */
export default function VisPane(
  {
    numSteps,
    stepNum,
    stepDat,
    prevStep,
    nextStep,
    reset,
  }:
  {
    numSteps: number
    stepNum: number
    stepDat: object
    prevStep: () => void
    nextStep: () => void
    reset: () => void
  },
) {
  return (
    <>
      <button onClick={prevStep}>Prev Step</button>
      <button onClick={nextStep}>Next Step</button>
      <button onClick={reset}>Reset</button>

      <p className="p-3">{numSteps}</p>
      <p className="p-3">{stepNum}</p>
      <p className="p-3">{JSON.stringify(stepDat)}</p>
    </>
  );
}
