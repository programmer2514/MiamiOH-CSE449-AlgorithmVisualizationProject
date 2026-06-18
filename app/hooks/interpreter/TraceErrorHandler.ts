import { BaseErrorListener } from 'antlr4ng';

export default class TraceErrorHandler extends BaseErrorListener {
  syntaxError(
    _: any, __: any,
    line: number, column: number, msg:
    string, ___: any,
  ) {
    throw new Error(`[line ${line}:${column}] ${msg}`);
  }
}
