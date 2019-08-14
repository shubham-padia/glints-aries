import * as React from 'react';
import { RangeContainer } from '../../Style/Input/RangeStyle';
declare class Range extends React.Component<Props, State> {
    state: {
        minVal: number;
        maxVal: number;
        val: number;
    };
    handleChange: (onChange: (newValue: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => void;
    componentDidMount(): void;
    render(): JSX.Element;
}
interface Props extends React.ComponentPropsWithoutRef<typeof RangeContainer> {
    min: number;
    max: number;
    value?: number;
    onChange?(newValue: string | React.ChangeEvent<HTMLInputElement>): void;
}
interface State {
    minVal: number;
    maxVal: number;
    val: number;
}
export default Range;
