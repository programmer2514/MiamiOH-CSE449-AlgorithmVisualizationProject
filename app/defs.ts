import monaco from 'monaco-editor';

const REGEX_STRING = '(".*?")|(\'.*?\')';
const REGEX_ANNOTATION = `@[\\w]+<.*?(${REGEX_STRING})? ?>`;

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
      'arr',
      'to',
      'fun',
      'for',
      'in',
      'if',
      'else',
      'elseif',
      'return',
      'end',
      'while',
      'do',
      'break',
      'and',
      'or',
      'continue',
      'not',
      'step',
      'True',
      'true',
      'False',
      'false',
      'Null',
      'null',
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

        [
          /[A-Z][\w]*/,
          {
            cases: {
              '@keywords': 'keyword',
              '@default': 'type.identifier',
            },
          },
        ],

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

        [REGEX_ANNOTATION, 'annotation'],

        [/\d+\.\d+/, 'number.float'],
        [/\d+/, 'number'],
        [/[:,.]/, 'delimiter'],

        [REGEX_STRING, 'string'],
        [/(".*!?.*")|('.*!?.*')/, 'string.invalid'],
      ],
    },
  } as monaco.languages.IMonarchLanguage,

  AVPDarkTheme: {
    base: 'vs-dark',
    inherit: true,
    rules: [],
    colors: {
      'editor.background': '#18181c',
      'editor.lineHighlightBorder': '#38383c',
    },
  } as monaco.editor.IStandaloneThemeData,

  AVPLightTheme: {
    base: 'vs',
    inherit: true,
    rules: [],
    colors: {
      'editor.background': '#ffffff',
      'editor.lineHighlightBorder': '#d8d8dc',
    },
  } as monaco.editor.IStandaloneThemeData,

  REGEX_ANNOTATION: RegExp(`${REGEX_ANNOTATION} ?`, 'g'),
} as const;
