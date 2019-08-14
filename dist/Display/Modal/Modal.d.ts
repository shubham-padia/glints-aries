import * as React from 'react';
import { ModalContentArea } from '../../Style/Display/ModalStyle';
declare class Modal extends React.Component<Props, State> {
    modalContentAreaRef: React.RefObject<HTMLDivElement>;
    state: {
        isOpen: boolean;
    };
    constructor(props: Props);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: Props, prevState: State): {
        isOpen: boolean;
    };
    componentDidUpdate(prevProps: Props): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
interface Props extends React.ComponentPropsWithoutRef<typeof ModalContentArea> {
    children: React.ReactNode;
    title?: string;
    isVisible?: boolean;
    type?: string;
    onClose?(): void;
    hideContentArea?: boolean;
    centering?: boolean;
    removeAnimation?: boolean;
    footer?: React.ReactElement[];
    size?: string;
    hideHeader?: boolean;
}
interface State {
    isOpen: boolean;
}
export default Modal;
