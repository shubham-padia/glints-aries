import * as React from 'react';
import { SearchFilterItemWrapper } from '../../Style/Input/SearchFilterStyle';
declare const SearchFilterItem: React.FunctionComponent<Props>;
export interface Props extends React.ComponentPropsWithoutRef<typeof SearchFilterItemWrapper> {
    children: React.ReactNode;
    onClick?(event: React.MouseEvent<HTMLLIElement, MouseEvent>): void;
}
export default SearchFilterItem;
