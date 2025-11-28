/**
 * Typescript definitions.
 */
export type Step = {
  line: number | [number, number]
  actions: {
    cmd: string
    params: {
      [key: string]: any
    }
  }[]
};
