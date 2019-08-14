import * as React from 'react';
import { TooltipContainer } from '../../Style/Display/TooltipStyle';
declare class Tooltip extends React.Component<Props, State> {
    state: {
        isHover: boolean;
    };
    render(): JSX.Element;
}
interface Props extends React.ComponentPropsWithoutRef<typeof TooltipContainer> {
    children: React.ReactNode;
    text: string;
    position?: string;
}
interface State {
    isHover: boolean;
}
export default Tooltip;
