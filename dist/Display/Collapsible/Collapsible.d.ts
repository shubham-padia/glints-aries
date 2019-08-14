import * as React from 'react';
import { CollapsibleContainer } from '../../Style/Display/CollapsibleStyle';
declare class Collapsible extends React.Component<Props, State> {
    state: {
        isOpen: boolean;
    };
    handleOpen: () => void;
    shouldComponentUpdate(nextProps: Props, nextState: State): boolean;
    componentDidMount(): void;
    render(): JSX.Element;
}
interface Props extends React.ComponentPropsWithoutRef<typeof CollapsibleContainer> {
    label: string;
    isOpen?: boolean;
}
interface State {
    isOpen: boolean;
}
export default Collapsible;
