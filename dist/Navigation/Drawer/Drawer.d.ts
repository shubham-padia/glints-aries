import * as React from 'react';
declare class Drawer extends React.Component<Props, State> {
    constructor(props: Props);
    handleAnimationStart: () => void;
    handleAnimationEnd: () => void;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
interface Props {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: Function;
}
interface State {
    isDisplay: boolean;
}
export default Drawer;
