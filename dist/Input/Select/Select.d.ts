import * as React from 'react';
import { SelectInput } from '../../Style/Input/SelectStyle';
declare class Select extends React.Component<Props, State> {
    static Option: React.FunctionComponent<SelectItemProps>;
    node: React.RefObject<HTMLDivElement>;
    state: {
        floating: boolean;
        isFocus: boolean;
        selectedValue: string;
        filterValue: React.ReactNode[];
        cursor: number;
        notMatch: boolean;
        childrenLength: number;
        defaultValue: string;
        isLoading: boolean;
    };
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleOnBlur: (event: MouseEvent) => void;
    handleFocusOut: (onBlur: (e: React.FocusEvent<HTMLInputElement>) => void) => (e: React.FocusEvent<HTMLInputElement>) => void;
    handleFocus: (onFocus: (e: React.FocusEvent<HTMLInputElement>) => void) => (e: React.FocusEvent<HTMLInputElement>) => void;
    handleChange: (onChange: (e: React.ChangeEvent<HTMLInputElement>) => void) => (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleClick: (onOptionClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void) => (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleMouseEnter: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
    static getDerivedStateFromProps(nextProps: Props, prevState: State): {
        selectedValue: string | number | string[];
        defaultValue: string | number | string[];
        floating: boolean;
        filterValue: React.ReactNode[];
        childrenLength?: undefined;
        notMatch?: undefined;
        isLoading?: undefined;
    } | {
        filterValue: React.ReactNode[];
        childrenLength: number;
        selectedValue?: undefined;
        defaultValue?: undefined;
        floating?: undefined;
        notMatch?: undefined;
        isLoading?: undefined;
    } | {
        notMatch: boolean;
        selectedValue?: undefined;
        defaultValue?: undefined;
        floating?: undefined;
        filterValue?: undefined;
        childrenLength?: undefined;
        isLoading?: undefined;
    } | {
        selectedValue: string | number | string[];
        defaultValue: string | number | string[];
        floating: boolean;
        filterValue?: undefined;
        childrenLength?: undefined;
        notMatch?: undefined;
        isLoading?: undefined;
    } | {
        isLoading: boolean;
        selectedValue?: undefined;
        defaultValue?: undefined;
        floating?: undefined;
        filterValue?: undefined;
        childrenLength?: undefined;
        notMatch?: undefined;
    };
    render(): JSX.Element;
}
interface Props extends React.ComponentPropsWithoutRef<typeof SelectInput> {
    label?: string;
    noOptionResult?: string;
    children: React.ReactNode;
    removeFloatingLabel?: boolean;
    removeDropIcon?: boolean;
    isLoading?: boolean;
    onFocus?(e: React.FocusEvent<HTMLInputElement>): void;
    onBlur?(e: React.FocusEvent<HTMLInputElement>): void;
    onChange?(value: string | React.ChangeEvent<HTMLInputElement>): void;
}
interface State {
    floating: boolean;
    isFocus: boolean;
    selectedValue: string;
    filterValue: React.ReactNode[];
    defaultValue: string;
    cursor: number;
    notMatch: boolean;
    childrenLength: number;
    isLoading: boolean;
}
interface SelectItemProps {
    children: string;
    value?: string;
    onOptionClick?(e: React.MouseEvent<HTMLLIElement, MouseEvent>): void;
}
export default Select;
