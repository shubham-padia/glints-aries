import * as React from 'react';
declare class Alert extends React.Component<Props, State> {
    alertContainerRef: React.RefObject<HTMLDivElement>;
    autoCloseTimeout: ReturnType<typeof setTimeout>;
    constructor(props: Props);
    static getDerivedStateFromProps(nextProps: Props, prevState: State): {
        isVisible: boolean;
    };
    componentDidUpdate(prevProps: Props): void;
    componentWillUnmount(): void;
    handleKeyDown: (onClose: () => void) => (e: React.KeyboardEvent<HTMLDivElement>) => void;
    renderAlertTypeIcon(): JSX.Element;
    renderMessage(): JSX.Element;
    renderIcon(): JSX.Element;
    render(): JSX.Element;
}
interface State {
    isVisible: boolean;
}
interface Props {
    type: string;
    message: string;
    onClose(): void;
    isOpen: boolean;
    className?: string;
    autoClose?: number;
}
export default Alert;
