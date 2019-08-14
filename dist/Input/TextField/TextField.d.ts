import * as React from 'react';
import { TextFieldInput } from '../../Style/Input/TextFieldStyle';
declare class TextField extends React.Component<Props, State> {
    constructor(props: Props);
    handleFocusChange: (onBlur: (e: React.FocusEvent<HTMLInputElement>) => void) => (e: React.FocusEvent<HTMLInputElement>) => void;
    handleShowPassword: () => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: Props): false | {
        floating: boolean;
    };
    render(): JSX.Element;
}
interface Props extends React.ComponentPropsWithoutRef<typeof TextFieldInput> {
    type: 'text' | 'password';
    label: string;
    disabled?: boolean;
    className?: string;
    removeFloatingLabel?: boolean;
}
interface State {
    floating: boolean;
    inputType: 'text' | 'password';
}
export default TextField;
