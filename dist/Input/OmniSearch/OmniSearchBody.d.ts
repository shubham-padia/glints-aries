import * as React from 'react';
import { OmniSearchResultContainer } from '../../Style/Input/OmniSearchStyle';
declare const OmniSearchBody: React.FunctionComponent<Props>;
export interface Props extends React.ComponentPropsWithoutRef<typeof OmniSearchResultContainer> {
    children: React.ReactNode;
}
export default OmniSearchBody;
