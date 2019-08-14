import * as React from 'react';
import { JobOverviewLinkStyle } from '../../Style/Application/JobOverviewStyle';
declare const JobOverviewLink: React.FunctionComponent<Props>;
interface Props extends React.ComponentPropsWithoutRef<typeof JobOverviewLinkStyle> {
    children: React.ReactNode;
    style?: React.CSSProperties;
}
export default JobOverviewLink;
