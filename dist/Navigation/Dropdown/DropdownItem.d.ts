import * as React from 'react';
import { DropdownItemWrapper } from '../../Style/Navigation/DropdownStyle';
declare const DropdownItem: React.FunctionComponent<Props>;
export interface Props extends React.ComponentPropsWithoutRef<typeof DropdownItemWrapper> {
    children: React.ReactNode;
}
export default DropdownItem;
