import * as React from 'react';
import { SecondaryBtn } from '../../Style/General/ButtonStyle';
declare const SecondaryButton: React.FunctionComponent<Props>;
interface Props extends React.ComponentPropsWithoutRef<typeof SecondaryBtn> {
    children: React.ReactNode;
    className: string;
    block: boolean;
    small: boolean;
    disabled?: boolean;
}
export default SecondaryButton;
