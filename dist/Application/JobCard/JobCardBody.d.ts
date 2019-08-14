import * as React from 'react';
import { JobcardBodyWrapper } from '../../Style/Application/JobCardStyle';
declare const JobCardBody: React.FunctionComponent<Props>;
export interface Props extends React.ComponentPropsWithoutRef<typeof JobcardBodyWrapper> {
    children: React.ReactNode;
    isLinkAble?: boolean;
}
export default JobCardBody;
