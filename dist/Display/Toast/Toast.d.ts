import * as React from 'react';
declare class Toast extends React.Component<Props> {
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
interface Props {
    children: React.ReactNode;
    isVisible: boolean;
    onClose(): void;
    theme?: string;
}
export default Toast;
