import * as React from 'react';
import { JobCardFooterWrapper } from '../../Style/Application/JobCardStyle';
declare const JobCardFooter: React.FunctionComponent<Props>;
export interface Props extends React.ComponentPropsWithoutRef<typeof JobCardFooterWrapper> {
    children: React.ReactNode;
    isLinkAble?: boolean;
}
export default JobCardFooter;
