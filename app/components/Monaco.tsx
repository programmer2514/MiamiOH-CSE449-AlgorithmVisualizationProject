import {
  useContext,
  useEffect,
  useState,
} from 'react';

import { Editor } from '@monaco-editor/react';

import Defs from '../defs';

import DarkModeContext from '../contexts/DarkModeContext';
import ModifiedContext from '../contexts/ModifiedContext';

/**
 * Renders the Monaco code editor. Allows highlighting and editing through the
 * passed-in props.
 *
 * @param {Object} props
 *        React props
 * @param {string} props.name
 *        The name of the editor
 * @param {string} props.src
 *        The source code to display
 * @param {function} props.setSrc
 *        A function to update the source code
 * @param {number | [number, number] | null} props.highlight
 *        The line range to highlight
 * @param {boolean} props.editing
 *        Whether the editor is in editing mode
 * @param {string} props.language
 *        The language to use (must be either 'avp' or 'vars')
 * @param {boolean} props.lockToState
 *        Whether to lock the editor's value to the value of its src state.
 *        This will break undo/redo if enabled
 */
export default function Monaco(
  {
    name,
    src,
    setSrc,
    highlight,
    editing,
    language,
    lockToState,
  }:
  {
    name: string
    src: string
    setSrc: (src: string) => void
    highlight: number | [number, number] | null
    editing: boolean
    language: string
    lockToState: boolean
  },
) {
  const isDark = useContext(DarkModeContext);
  const [, setModified] = useContext(ModifiedContext);

  const [monaco, setMonaco] = useState(null as [import('monaco-editor').editor.IStandaloneCodeEditor, typeof import('monaco-editor')] | null);
  const [decoration, setDecoration] = useState(null as import('monaco-editor').editor.IEditorDecorationsCollection | null);
  const [cursorPos, setCursorPos] = useState([0, 0] as [number, number]);
  const [selectionHandler, setSelectionHandler] =
    useState(null as import('monaco-editor').IDisposable | null);

  useEffect(() => {
    if (!monaco) return;

    monaco[1].editor.setTheme(isDark ? 'avp-dark' : 'avp');

    monaco[0].updateOptions({
      readOnly: !editing,
      domReadOnly: !editing,
    });

    const oldCursorPos = cursorPos;

    monaco[0].setValue(
      (!editing && language === 'avp') ?
        src?.replaceAll(/@[\w]+<.*> ?/g, '') :
        src,
    );

    monaco[0].setPosition({
      lineNumber: oldCursorPos[0],
      column: oldCursorPos[1],
    });
  }, lockToState ? [isDark, monaco, editing, src] : [isDark, monaco, editing]);

  useEffect(() => {
    if (monaco === null || highlight === null) return;

    decoration?.clear();

    if (typeof highlight === 'number') {
      setDecoration(
        monaco[0].createDecorationsCollection([
          { range: new monaco[1].Range(highlight, 1, highlight, 1), options: { className: 'avp-highlight' } },
        ]),
      );
    } else {
      setDecoration(
        monaco[0].createDecorationsCollection([
          { range: new monaco[1].Range(highlight[0], 1, highlight[1], 1), options: { className: 'avp-highlight' } },
        ]),
      );
    }
  }, [highlight, monaco]);

  useEffect(() => {
    if (monaco === null) return;

    if (selectionHandler) {
      selectionHandler.dispose();
      setSelectionHandler(null);
    }

    setSelectionHandler(
      monaco[0].onDidChangeCursorSelection((e) => {
        setCursorPos(
          [e.selection.positionLineNumber, e.selection.positionColumn],
        );

        if (!editing) {
          monaco[0].setSelection(new monaco[1].Range(0, 0, 0, 0));
          monaco[0].setPosition(new monaco[1].Position(0, 0));
        }
      }),
    );
  }, [monaco, editing]);

  return (
    <div
      id={name}
      className="w-full h-full"
    >
      <style>
        {(!editing) && `
          #${name} .monaco-editor {
            & .view-overlays svg > circle,
            & .decorationsOverviewRuler {
              display: none !important;
            }

            & .core-guide-indent.indent-active {
              box-shadow: 1px 0 0 0 var(--indent-color) inset !important;
            }
            
            & .active-line-number {
              color: var(--vscode-editorLineNumber-foreground) !important;
            }

            & .current-line-exact {
              border: none !important;
            }

            & .cursor {
              opacity: 0 !important;
            }

            & .wordHighlightText,
            & .selected-text,
            & .selectionHighlight {
              background-color: transparent !important;
            }

            & .monaco-editor-overlaymessage .message {
              padding: 0.25rem 0.5rem !important;

              & p {
                transform: translateY(-2px) !important;
              }
            }
          }
        `}
      </style>
      <Editor
        options={{
          minimap: { enabled: false },
        }}
        onMount={
          (editor, monaco) => {
            monaco.languages.register({ id: 'avp' });
            monaco.languages.setMonarchTokensProvider('avp', Defs.AVPLanguage);

            monaco.languages.register({ id: 'vars' });
            monaco.languages.setMonarchTokensProvider('vars', Defs.AVPLanguage);

            monaco.editor.setModelLanguage(editor.getModel()!, language);

            monaco.editor.defineTheme('avp', Defs.AVPLightTheme);
            monaco.editor.defineTheme('avp-dark', Defs.AVPDarkTheme);

            setMonaco([editor, monaco]);
          }
        }
        onChange={
          (value) => {
            if (!editing) return;

            setSrc(value || '');
            setModified(true);
          }
        }
        className="**:transition-none"
      />
    </div>
  );
}
