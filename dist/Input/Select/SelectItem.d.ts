import * as React from 'react';
import { SelectItemWrapper } from '../../Style/Input/SelectStyle';
declare const SelectItem: React.FunctionComponent<Props>;
interface Props extends React.ComponentPropsWithoutRef<typeof SelectItemWrapper> {
    children: React.ReactNode;
    onClick?(event: React.MouseEvent<HTMLLIElement, MouseEvent>): void;
    className?: string;
}
export default SelectItem;
