import * as React from 'react';
declare class Blockquote extends React.Component<Props, State> {
    static Profile: React.FunctionComponent<import("./BlockquoteProfile").Props>;
    static Content: React.FunctionComponent<import("./BlockquoteContent").Props>;
    static Testimony: React.FunctionComponent<import("./BlockquoteTestimony").Props>;
    static Author: React.FunctionComponent<import("./BlockquoteAuthor").Props>;
    static Origin: React.FunctionComponent<import("./BlockquoteOrigin").Props>;
    state: {
        isHover: boolean;
    };
    render(): JSX.Element;
}
interface Props {
    children: React.ReactNode;
    className?: string;
}
interface State {
    isHover: boolean;
}
export default Blockquote;
