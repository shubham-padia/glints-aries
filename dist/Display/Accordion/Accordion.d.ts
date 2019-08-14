import * as React from 'react';
import { Props as AccordionPanelProps } from './AccordionPanel';
declare class Accordion extends React.Component<Props, State> {
    static Panel: React.FunctionComponent<AccordionPanelProps>;
    state: {
        currIndex: number;
        isOpenSingleItem: boolean;
    };
    handleOpen: (index: number) => void;
    handleOpenSingleItem: () => void;
    renderMultipleItem(): JSX.Element[];
    renderSingleItem(): JSX.Element;
    render(): JSX.Element;
}
interface Props {
    children: React.ReactNode;
    className?: string;
}
interface State {
    currIndex: number;
    isOpenSingleItem: boolean;
}
export default Accordion;
