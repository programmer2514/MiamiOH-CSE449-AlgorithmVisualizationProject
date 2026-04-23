import {
  createRef,
} from 'react';

import {
  Button,
  Textarea,
} from '@material-tailwind/react';

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
        className="rounded-none border-none shadow-none h-[calc(100%-6.125rem)]"
        id="aiInput"
        placeholder="Input prompt here..."
      >
      </Textarea>
      <Button
        className="w-full rounded-none border-none shadow-none! hover:bg-primary/10! hover:text-primary! h-13.5"
        ref={buttonRef}
        variant="outline"
        onClick={
          () => {
            buttonRef.current!.innerHTML = 'Generating...';
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

                buttonRef.current!.innerHTML = 'Generate';
                buttonRef.current!.disabled = false;
              });
          }
        }
      >
        Generate
      </Button>
    </>
  );
}
