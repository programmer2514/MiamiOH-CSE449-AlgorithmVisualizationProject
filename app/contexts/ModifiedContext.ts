import { createContext } from 'react';

/**
 * Provides the modified state of the current algorithm to any rendered element.
 */
const ModifiedContext = createContext(
  [
    null,
    (_: boolean | null) => {},
  ] as [
    boolean | null,
    (modified: boolean | null) => void,
  ],
);

export default ModifiedContext;
