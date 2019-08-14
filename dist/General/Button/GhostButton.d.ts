import * as React from 'react';
import { GhostBtn } from '../../Style/General/ButtonStyle';
declare const GhostButton: React.FunctionComponent<Props>;
interface Props extends React.ComponentPropsWithoutRef<typeof GhostBtn> {
    children: React.ReactNode;
    className: string;
    theme: string;
    disabled?: boolean;
    block: boolean;
    small: boolean;
    removeHoverEffect: boolean;
}
export default GhostButton;
