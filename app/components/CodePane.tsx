import {
  useContext,
  useEffect,
  useState,
} from 'react';

import { Editor } from '@monaco-editor/react';

import Defs from '../defs';

import DarkModeContext from '../contexts/DarkModeContext';

/**
 * Renders the code pane for the visualizer. Allows highlighting and editing
 * through the passed-in props.
 *
 * @param {Object} props
 *        React props
 * @param {string | null} props.src
 *        The source code to display
 * @param {function} props.setSrc
 *        A function to update the source code
 * @param {number | [number, number] | null} props.highlight
 *        The line range to highlight
 * @param {function} props.setHighlight
 *        A function to update the highlighted line range
 */
export default function CodePane(
  {
    src,
    setSrc,
    highlight,
    setHighlight,
  }:
  {
    src: string | null
    setSrc: (src: string | null) => void
    highlight: number | [number, number] | null
    setHighlight: (highlight: number | [number, number] | null) => void
  },
) {
  const isDark = useContext(DarkModeContext);

  const [monaco, setMonaco] = useState(null as [import('monaco-editor').editor.IStandaloneCodeEditor, typeof import('monaco-editor')] | null);
  const [decoration, setDecoration] = useState(null as import('monaco-editor').editor.IEditorDecorationsCollection | null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (!monaco) return;

    monaco[1].editor.setTheme(
      (isDark || false) ?
        editing ? 'avp-dark' : 'avp-dark-readonly' :
        editing ? 'avp' : 'avp-readonly',
    );
  }, [isDark, monaco]);

  useEffect(() => {
    if (monaco === null || highlight === null) return;

    decoration?.clear();

    if (typeof highlight === 'number') {
      setDecoration(
        monaco[0].createDecorationsCollection([
          { range: new monaco[1].Range(highlight, 1, highlight, 1), options: { className: 'highlight' } },
        ]),
      );
    } else {
      setDecoration(
        monaco[0].createDecorationsCollection([
          { range: new monaco[1].Range(highlight[0], 1, highlight[1], 1), options: { className: 'highlight' } },
        ]),
      );
    }
  }, [highlight, monaco]);

  return (
    <Editor
      value={
        src
          ?.replaceAll(/@[\w]+<.*> ?/g, '')
          .replace(/\/\/.*\r?\n\r?\n/, '') || ''
      }
      options={
        {
          minimap: { enabled: false },
          readOnly: true,
          domReadOnly: true,
        }
      }
      onMount={
        (editor, monaco) => {
          monaco.languages.register({ id: 'avp' });
          monaco.languages.setMonarchTokensProvider('avp', Defs.AVPLanguage);
          monaco.editor.setModelLanguage(editor.getModel()!, 'avp');

          monaco.editor.defineTheme('avp-dark', Defs.AVPDarkTheme);
          monaco.editor.defineTheme('avp-dark-readonly', Defs.AVPDarkReadOnlyTheme);
          monaco.editor.defineTheme('avp', Defs.AVPLightTheme);
          monaco.editor.defineTheme('avp-readonly', Defs.AVPLightReadOnlyTheme);

          setMonaco([editor, monaco]);
        }
      }
      className="**:transition-none!"
    />
  );
}
