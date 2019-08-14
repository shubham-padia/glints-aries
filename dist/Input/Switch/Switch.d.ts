import * as React from 'react';
import { SwitchContainer } from '../../Style/Input/SwitchStyle';
declare class Switch extends React.Component<Props, State> {
    state: {
        clickID: string;
        initialValue: string;
    };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    componentDidMount(): void;
    render(): JSX.Element;
}
interface Props extends Omit<React.ComponentPropsWithoutRef<typeof SwitchContainer>, 'ID' | 'items'> {
    label: string[];
    name: string[];
    value: string[];
}
interface State {
    clickID: string;
    initialValue: string;
}
export default Switch;
