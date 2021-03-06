import * as React from 'react';
import { Markdown } from '@uifabric/example-app-base';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';

const rootClass = mergeStyles({
  marginTop: -20,
  padding: 40,
});

export const GettingStartedPage: React.FunctionComponent = () => {
  return (
    <div className={rootClass}>
      <Markdown>{require<string>('!raw-loader!@uifabric/charting/README.md')}</Markdown>
    </div>
  );
};
