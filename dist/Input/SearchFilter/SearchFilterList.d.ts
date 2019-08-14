import * as React from 'react';
import { SearchFilterListWrapper } from '../../Style/Input/SearchFilterStyle';
declare const SearchFilterList: (props: Props) => JSX.Element;
export interface Props extends React.ComponentPropsWithoutRef<typeof SearchFilterListWrapper> {
    children: React.ReactNode;
    title: HTMLDivElement['title'];
}
export default SearchFilterList;
