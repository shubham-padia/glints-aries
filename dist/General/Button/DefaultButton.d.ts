import * as React from 'react';
import { DefaultBtn } from '../../Style/General/ButtonStyle';
declare const DefaultButton: React.FunctionComponent<Props>;
interface Props extends React.ComponentPropsWithoutRef<typeof DefaultBtn> {
    children: React.ReactNode;
    className: string;
    theme: string;
    disabled?: boolean;
    block: boolean;
    small: boolean;
    removeHoverEffect: boolean;
}
export default DefaultButton;
