import * as React from 'react';
import { OmniSearchListItem } from '../../Style/Input/OmniSearchStyle';
declare const OmniSearchList: React.FunctionComponent<Props>;
export interface Props extends React.ComponentPropsWithoutRef<typeof OmniSearchListItem> {
    children: React.ReactNode;
    title: string;
}
export default OmniSearchList;
