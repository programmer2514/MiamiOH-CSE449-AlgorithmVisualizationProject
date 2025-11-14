import { useState, useEffect } from 'react';
import './App.css';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { PseudocodeLexer } from './generated/PseudocodeLexer';
import { PseudocodeParser } from './generated/PseudocodeParser';
import TsTranspilerVisitor from './TsInterpreterVisitor';

const sampleCode = `key = 4
fun Linear_Search(a1, key):
    for n in a1:
        if n == key:
            return n
        end if
    end for
    return -1
end fun`;

function transpile(inputText: string): string {
  try {
    const inputStream = CharStreams.fromString(inputText);
    const lexer = new PseudocodeLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new PseudocodeParser(tokenStream);

    const tree = parser.program();

    const visitor = new TsTranspilerVisitor();
    return visitor.visit(tree);
  } catch (error: any) {
    return `Error parsing code:\n${error.message}`;
  }
}
function App() {
  // State for the input pseudocode
  const [pseudocode, setPseudocode] = useState(sampleCode);
  // State for the generated JavaScript output
  const [generatedJs, setGeneratedJs] = useState('');

  // This "effect" runs the transpiler whenever the 'pseudocode' state changes
  useEffect(() => {
    const result = transpile(pseudocode);
    setGeneratedJs(result);
  }, [pseudocode]);

  return (
    <div className="app-container">
      <div>
        <h2>Your Pseudocode</h2>
        <textarea
          value={pseudocode}
          onChange={(e) => setPseudocode(e.target.value)}
          spellCheck="false"
        />
      </div>
      <div>
        <h2>Generated JavaScript</h2>
        <pre>
          <code>{generatedJs}</code>
        </pre>
      </div>
    </div>
  );
}

export default App;