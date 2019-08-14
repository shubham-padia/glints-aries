import * as React from 'react';
declare const Button: React.FunctionComponent<Props>;
export interface Props {
    variant?: string;
    theme?: string;
    onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
    block?: boolean;
    small?: boolean;
    children: React.ReactNode;
    className?: string;
    removeHoverEffect?: boolean;
}
export default Button;
