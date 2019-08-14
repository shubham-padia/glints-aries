import * as React from 'react';
declare class SearchFilter extends React.Component<Props, State> {
    static Body: React.FunctionComponent<import("./SearchFilterBody").Props>;
    static Button: import("styled-components").StyledComponent<React.FunctionComponent<import("../../General/Button/Button").Props>, any, {}, never>;
    static List: (props: import("./SearchFilterList").Props) => JSX.Element;
    static Item: React.FunctionComponent<import("./SearchFilterItem").Props>;
    state: {
        isOpen: boolean;
    };
    searchFilterRef: React.RefObject<HTMLDivElement>;
    inputRef: React.RefObject<HTMLInputElement>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleOpen: () => void;
    handleClose: () => void;
    handleMouseDown: (event: MouseEvent) => void;
    render(): JSX.Element;
}
interface Props extends Omit<React.HTMLProps<HTMLInputElement>, 'content'> {
    children: React.ReactNode;
    content: React.ReactNode;
    label: string;
}
interface State {
    isOpen: boolean;
}
export default SearchFilter;
