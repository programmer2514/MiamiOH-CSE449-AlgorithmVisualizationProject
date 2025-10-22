/// <reference types="vite/client" />

declare module 'antlr4' {
    export * from 'antlr4/index';
}

declare module './generated/PseudocodeLexer.js';
declare module './generated/PseudocodeParser.js';
declare module './generated/PseudocodeVisitor.js';