import * as React from 'react';
declare class Checkbox extends React.PureComponent<Props, State> {
    state: {
        checked: boolean;
    };
    handleClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
    render(): JSX.Element;
}
interface Props extends React.HTMLProps<HTMLInputElement> {
    onClick?(e: React.MouseEvent<HTMLInputElement, MouseEvent>): void;
}
interface State {
    checked: boolean;
}
export default Checkbox;
