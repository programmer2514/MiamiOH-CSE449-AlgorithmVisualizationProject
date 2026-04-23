import {
  createRef,
} from 'react';

import {
  Button,
  Textarea,
} from '@material-tailwind/react';

import Globals from '../../globals';

/**
 * Renders the AI pane for the visualizer.
 *
 * @param {Object} props
 *        React props
 * @param {function} props.setSrc
 *        A function to update the source code
 * @param {boolean} props.setEditing
 *        A function to update the editing state
 */
export default function AIPane(
  {
    setSrc,
    setEditing,
  }:
  {
    setSrc: (src: string) => void
    setEditing: (editing: boolean) => void
  },
) {
  const buttonRef = createRef<HTMLButtonElement>();

  return (
    <>
      <Textarea
        className="rounded-none border-none shadow-none text-md text-primary/75! focus:text-primary! h-[calc(100%-6.125rem)]"
        id="aiInput"
        placeholder="Enter your prompt..."
      >
      </Textarea>
      <Button
        className="w-full text-md h-13.5 rounded-none shadow-none! border-0 border-t border-[#d8d8dc] dark:border-[#38383c] hover:bg-primary/5! hover:text-primary! disabled:hover:bg-transparent!"
        id="aiButton"
        ref={buttonRef}
        variant="outline"
        onClick={
          () => {
            buttonRef.current!.innerHTML = Globals.AIButtonStrings.Wait.Running;
            buttonRef.current!.disabled = true;

            fetch('https://beefstewbibi-avp-rag-system.hf.space/api/generate', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                message: (document.getElementById('aiInput') as HTMLTextAreaElement)!.value,
              }),
            })
              .then(res => res.json())
              .then((res) => {
                const code = res.generated_code
                  .replaceAll(/```.*\n?/g, '');

                setSrc(code);
                setEditing(true);
              })
              .catch(() => {
                buttonRef.current!.innerHTML = Globals.AIButtonStrings.Error;
                setTimeout(() => {
                  buttonRef.current!.innerHTML = Globals.AIButtonStrings.Run;
                  buttonRef.current!.disabled = false;
                }, 1000);
              });
          }
        }
      >
        {Globals.AIButtonStrings.Run}
      </Button>
    </>
  );
}
