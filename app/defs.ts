import monaco from 'monaco-editor';

/**
 * Monaco editor definitions.
 *
 * @property {string} AVPLanguage
 *           The AVP language definition
 * @property {string} AVPDarkTheme
 *           The AVP dark theme definition
 * @property {string} AVPLightTheme
 *           The AVP light theme definition
 */
export default {
  AVPLanguage: {
    defaultToken: 'invalid',
    tokenPostfix: '.avp',

    keywords: [
      'else',
      'end',
      'for',
      'fun',
      'if',
      'in',
      'return',
    ],

    operators: [
      '<=',
      '>=',
      '==',
      '!=',
      '+',
      '-',
      '*',
      '/',
      '%',
      ':',
      '=',
      '+=',
      '-=',
      '*=',
      '/=',
      '%=',
    ],

    symbols: /[=><!~?:&|+\-*/^%]+/,

    brackets: [
      { close: '[', open: ']', token: 'delimiter.square' },
      { close: '(', open: ')', token: 'delimiter.parenthesis' },
    ],

    tokenizer: {
      root: [
        [
          /[a-z][\w]*/,
          {
            cases: {
              '@keywords': 'keyword',
              '@default': 'identifier',
            },
          },
        ],
        [/[A-Z][\w]*/, 'type.identifier'],

        [/[ \t\r\n]+/, 'white'],
        [/\/\/.*$/, 'comment'],

        [
          /@symbols/,
          {
            cases: {
              '@operators': 'delimiter',
              '@default': '',
            },
          },
        ],

        [/[[\]]/, 'delimiter.square'],
        [/[()]/, 'delimiter.parenthesis'],

        [/@[\w]+<.*>/, 'annotation'],

        [/\d+\.\d+/, 'number.float'],
        [/\d+/, 'number'],
        [/[:,.]/, 'delimiter'],

        [/".*"/, 'string'],
        [/".*!?.*"/, 'string.invalid'],
      ],
    },
  } as monaco.languages.IMonarchLanguage,

  AVPDarkTheme: {
    base: 'vs-dark',
    inherit: true,
    rules: [],
    colors: {
      'editor.background': '#020617',
      'editor.lineHighlightBorder': '#1e293b',
    },
  } as monaco.editor.IStandaloneThemeData,

  AVPDarkReadOnlyTheme: {
    base: 'vs-dark',
    inherit: true,
    rules: [],
    colors: {
      'editor.background': '#020617',
      'editor.lineHighlightBorder': '#00000000',
    },
  } as monaco.editor.IStandaloneThemeData,

  AVPLightTheme: {
    base: 'vs',
    inherit: true,
    rules: [],
    colors: {
      'editor.background': '#ffffff',
      'editor.lineHighlightBorder': '#e2e8f0',
    },
  } as monaco.editor.IStandaloneThemeData,

  AVPLightReadOnlyTheme: {
    base: 'vs',
    inherit: true,
    rules: [],
    colors: {
      'editor.background': '#ffffff',
      'editor.lineHighlightBorder': '#00000000',
    },
  } as monaco.editor.IStandaloneThemeData,
} as const;
