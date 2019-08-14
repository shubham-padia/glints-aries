import * as React from 'react';
declare class Popover extends React.Component<Props, State> {
    constructor(props: Props);
    handleOnClick: () => void;
    handleClickOutside: () => void;
    renderChildren: () => JSX.Element;
    render(): JSX.Element;
}
interface Props {
    className?: string;
    children: React.ReactNode;
    content: React.ReactNode;
}
interface State {
    isOpen: boolean;
}
export default Popover;
