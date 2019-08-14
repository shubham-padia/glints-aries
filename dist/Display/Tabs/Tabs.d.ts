import * as React from 'react';
import { Props as TabPaneProps } from './TabPane';
declare class Tabs extends React.Component<Props, State> {
    static Pane: React.FunctionComponent<TabPaneProps>;
    constructor(props: Props);
    handleClickTab: (index: number) => () => void;
    render(): JSX.Element;
}
interface Props {
    children: React.ReactNode;
    label?: string;
    className?: string;
}
interface State {
    currentIndex: number;
}
export default Tabs;
