import * as React from 'react';
import { TabsContent } from '../../Style/Display/TabsStyle';
declare const TabPane: React.FunctionComponent<Props>;
export interface Props extends React.ComponentPropsWithoutRef<typeof TabsContent> {
    children: React.ReactNode;
    tab?: string;
}
export default TabPane;
