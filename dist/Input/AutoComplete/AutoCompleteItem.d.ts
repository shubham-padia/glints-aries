import * as React from 'react';
import { AutoCompleteItemWrapper } from '../../Style/Input/AutoCompleteStyle';
declare const AutoCompleteItem: React.FunctionComponent<Props>;
interface Props extends React.ComponentPropsWithoutRef<typeof AutoCompleteItemWrapper> {
    children: React.ReactNode;
    onClick?(e: React.MouseEvent<HTMLLIElement, MouseEvent>): void;
}
export default AutoCompleteItem;
