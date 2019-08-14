import * as React from 'react';
declare class OmniSearch extends React.Component<Props, State> {
    static Body: React.FunctionComponent<import("./OmniSearchBody").Props>;
    static Button: import("styled-components").StyledComponent<React.FunctionComponent<import("../../General/Button/Button").Props>, any, {}, never>;
    static List: React.FunctionComponent<import("./OmniSearchList").Props>;
    static Item: React.FunctionComponent<import("./OmniSearchItem").Props>;
    state: {
        isOpen: boolean;
    };
    handleOpen: () => void;
    render(): JSX.Element;
}
interface Props extends Omit<React.HTMLProps<HTMLInputElement>, 'content'> {
    label: string;
    children: React.ReactNode;
    content: React.ReactNode;
}
interface State {
    isOpen: boolean;
}
export default OmniSearch;
