import * as React from 'react';
import { DemoPage } from '../DemoPage';

import { FocusZonePageProps } from '@fluentui/react-examples/lib/office-ui-fabric-react/FocusZone/FocusZone.doc';

export const FocusZonePage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage
    jsonDocs={require('@uifabric/api-docs/lib/pages/office-ui-fabric-react/FocusZone.page.json')}
    {...{ ...FocusZonePageProps, ...props }}
  />
);
