import * as React from 'react';
import { AccordionPanelWrapper } from '../../Style/Display/AccordionStyle';
declare const AccordionPanel: React.FunctionComponent<Props>;
export interface Props extends React.ComponentPropsWithoutRef<typeof AccordionPanelWrapper> {
    label: string;
    content: string;
    active?: boolean;
}
export default AccordionPanel;
