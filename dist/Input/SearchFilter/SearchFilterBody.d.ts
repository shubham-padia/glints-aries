import * as React from 'react';
import { SearchFilterResultContainer } from '../../Style/Input/SearchFilterStyle';
declare const SearchFilterBody: React.FunctionComponent<Props>;
export interface Props extends React.ComponentPropsWithoutRef<typeof SearchFilterResultContainer> {
    children: React.ReactNode;
}
export default SearchFilterBody;
