import * as React from 'react';
import { AutoCompleteInput } from '../../Style/Input/AutoCompleteStyle';
declare class AutoComplete extends React.Component<Props, State> {
    static Option: React.FunctionComponent<AutoCompleteItemProps>;
    autoCompleteContainerRef: React.RefObject<HTMLDivElement>;
    constructor(props: Props);
    handleFocus: (onFocus: (e: React.FocusEvent<HTMLInputElement>) => void) => (e: React.FocusEvent<HTMLInputElement>) => void;
    handleFocusOut: (onBlur: () => void) => (e: React.FocusEvent<HTMLInputElement>) => void;
    handleChange: (onChange: (e: React.ChangeEvent<HTMLInputElement>) => void) => (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleClick: (onOptionClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void) => (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleMouseEnter: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
    static getDerivedStateFromProps(nextProps: Props, prevState: State): Partial<State>;
    componentDidMount(): void;
    render(): JSX.Element;
}
interface AutoCompleteItemProps {
    value: string;
    onOptionClick?(e: React.MouseEvent<HTMLLIElement, MouseEvent>): void;
    children: string;
    additionalInfo: React.ReactNode;
}
interface Props extends React.ComponentPropsWithoutRef<typeof AutoCompleteInput> {
    children: React.ReactNode;
    label: string;
    removeFloatingLabel?: boolean;
    value?: string;
    onFocus?(e: React.FocusEvent<HTMLInputElement>): void;
    onBlur?(): void;
    onChange?(value: string | React.ChangeEvent): void;
}
interface State {
    isOpen: boolean;
    floating: boolean;
    cursor: number;
    defaultValue: string;
    selectedValue: string;
    filterValue: React.ReactElement<AutoCompleteItemProps>[];
}
export default AutoComplete;
