import { useState, useEffect } from 'react';
import './App.css';

// Import ANTLR and our generated/custom files
import antlr4 from 'antlr4';
import PseudocodeLexer from './generated/PseudocodeLexer.js';
import PseudocodeParser from './generated/PseudocodeParser.js';
import TsTranspilerVisitor from './TsInterpreterVisitor.js';

// The initial code to display in the editor
const sampleCode = `key = 4
fun Linear_Search(a1, key):
    for n in a1:
        if n == key:
            return n
        end if
    end for
    return -1
end fun`;

// A helper function to contain the core transpiler logic
function transpile(inputText: string): string {
  try {
    // Create char stream - antlr4 API varies by version
    const chars = (antlr4 as any).CharStreams 
      ? (antlr4 as any).CharStreams.fromString(inputText)
      : new (antlr4 as any).CharStream(inputText);
    
    const lexer = new PseudocodeLexer(chars);
    const tokens = new (antlr4 as any).CommonTokenStream(lexer);
    const parser = new PseudocodeParser(tokens);
    const tree = parser.program();

    const visitor = new TsTranspilerVisitor();
    return visitor.visit(tree);
  } catch (error: any) {
    // Basic error handling
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