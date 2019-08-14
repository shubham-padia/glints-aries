import * as React from 'react';
import { TextareaInput } from '../../Style/Input/TextareaStyle';
declare class Textarea extends React.PureComponent<Props, State> {
    textareaInputRef: React.RefObject<HTMLTextAreaElement>;
    state: {
        floating: boolean;
        rows: number;
        minRows: number;
        maxRows: number;
        textareaMaxHeight: number;
    };
    constructor(props: Props);
    handleFocusChange: (onBlur: () => void) => (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => any;
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
interface Props extends React.ComponentPropsWithoutRef<typeof TextareaInput> {
    label: string;
    onBlur?(): void;
    onChange?(e: React.ChangeEvent<HTMLTextAreaElement>): void;
    removeFloatingLabel?: boolean;
}
interface State {
    floating: boolean;
    rows: number;
    minRows: number;
    maxRows: number;
    textareaMaxHeight: number;
}
export default Textarea;
