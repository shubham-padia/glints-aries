import * as React from 'react';
import { OmniSearchItemWrapper } from '../../Style/Input/OmniSearchStyle';
declare const OmniSearchItem: React.FunctionComponent<Props>;
export interface Props extends React.ComponentPropsWithoutRef<typeof OmniSearchItemWrapper> {
    children: React.ReactNode;
    onClick?(e: React.MouseEvent<HTMLLIElement, MouseEvent>): void;
}
export default OmniSearchItem;
