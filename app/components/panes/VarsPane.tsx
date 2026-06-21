import Monaco from '../Monaco';

/**
 * Renders the vars pane for the visualizer.
 *
 * @param {Object} props
 *        React props
 * @param {Object} props.vars
 *        The variables to display
 */
export default function VarsPane(
  {
    vars,
  }:
  {
    vars: { [key: string]: [any, number] }
  },
) {
  return (
    <Monaco
      name="vars"
      src={
        Object.keys(vars)
          .map(key => `${
            key.replaceAll(/__\$.*?__\./g, '')
          }: ${
            (JSON.stringify(vars[key][0]) || `ERROR`)
              .replaceAll(',', ', ')
              .replaceAll('"<function>"', '<function>')
              .replaceAll(/\\(.)/g, '$1')
              .replaceAll('null', 'Null')
              .replaceAll('true', 'True')
              .replaceAll('false', 'False')
              .replace(/^"(.*".*)"$/, '\'$1\'')
          }`)
          .join('\n')
      }
      setSrc={(_: string) => {}}
      highlights={
        Object.keys(vars)
          .map((key, idx) => [idx, vars[key][1]])
          .filter(key => key[1] > 0)
          .map(key => key[0] + 1)
      }
      greyouts={
        Object.keys(vars)
          .map((key, idx) => [idx, vars[key][1]])
          .filter(key => key[1] < 0)
          .map(key => key[0] + 1)
      }
      errors={[]}
      editing={false}
      expertMode={false}
      bindSrc={true}
    />
  );
}
