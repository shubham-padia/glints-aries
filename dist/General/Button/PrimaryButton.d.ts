import * as React from 'react';
import { PrimaryBtn } from '../../Style/General/ButtonStyle';
declare const PrimaryButton: React.FunctionComponent<Props>;
interface Props extends React.ComponentPropsWithoutRef<typeof PrimaryBtn> {
    children: React.ReactNode;
    className: string;
    theme: string;
    disabled?: boolean;
    block: boolean;
    small: boolean;
}
export default PrimaryButton;
