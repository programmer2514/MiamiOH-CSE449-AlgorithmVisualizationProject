import { useState, useEffect } from 'react';
import './App.css';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { PseudocodeLexer } from './generated/PseudocodeLexer';
import { PseudocodeParser } from './generated/PseudocodeParser';
import TsTranspilerVisitor from './TsInterpreterVisitor';
import TraceInterpreterVisitor from './TraceInterpreter';

// Updated sample code with mandatory 'arr' syntax and function call
const sampleCode = `a1 = arr[1, 10, 5, 6, 4, 7, 19]
key = 4

fun Linear_Search(a, k):
    for n in a:
        if n == k:
            return n
        end if
    end for
    return -1
end fun

Linear_Search(a1, key)`;

function formatParseTree(treeString: string): string {
  let indentLevel = 0;
  let result = '';
  for (let i = 0; i < treeString.length; i++) {
    const char = treeString[i];
    if (char === '(') {
      result += '\n' + '  '.repeat(indentLevel);
      indentLevel++;
    } else if (char === ')') {
      indentLevel--;
    }
    result += char;
  }
  return result.trim();
}

function processCode(inputText: string) {
  try {
    const inputStream = CharStreams.fromString(inputText);
    const lexer = new PseudocodeLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new PseudocodeParser(tokenStream);

    const tree = parser.program();

    // JS Compiler
    const jsVisitor = new TsTranspilerVisitor();
    const jsOutput = jsVisitor.visit(tree);

    // Raw Parse Tree
    const rawTree = formatParseTree(tree.toStringTree(parser));

    // Execution Trace (JSON)
    const traceLexer = new PseudocodeLexer(CharStreams.fromString(inputText));
    const traceParser = new PseudocodeParser(new CommonTokenStream(traceLexer));
    const traceTree = traceParser.program();
    const traceVisitor = new TraceInterpreterVisitor();
    traceVisitor.visit(traceTree);
    const traceOutput = JSON.stringify(traceVisitor.steps, null, 2);

    return { js: jsOutput, tree: rawTree, trace: traceOutput, error: null };
  } catch (error: any) {
    return { js: '', tree: '', trace: '', error: `Error: ${error.message}` };
  }
}

function App() {
  const [pseudocode, setPseudocode] = useState(sampleCode);
  const [output, setOutput] = useState({ js: '', tree: '', trace: '', error: null as string | null });
  const [viewMode, setViewMode] = useState<'js' | 'tree' | 'trace'>('trace');

  useEffect(() => {
    setOutput(processCode(pseudocode));
  }, [pseudocode]);

  return (
    <div className="app-container">
      <div className="pane input-pane">
        <h2>Input Pseudocode</h2>
        <textarea
          value={pseudocode}
          onChange={(e) => setPseudocode(e.target.value)}
          spellCheck="false"
        />
      </div>
      <div className="pane output-pane">
        <div className="header-row">
          <h2>Output</h2>
          <div className="toggle-group">
            <button className={viewMode === 'js' ? 'active' : ''} onClick={() => setViewMode('js')}>JavaScript</button>
            <button className={viewMode === 'tree' ? 'active' : ''} onClick={() => setViewMode('tree')}>Parse Tree</button>
            <button className={viewMode === 'trace' ? 'active' : ''} onClick={() => setViewMode('trace')}>Execution Trace</button>
          </div>
        </div>
        <pre className="output-area">
          {output.error ? (
            <code className="error">{output.error}</code>
          ) : (
            <code>{output[viewMode]}</code>
          )}
        </pre>
      </div>
    </div>
  );
}

export default App;