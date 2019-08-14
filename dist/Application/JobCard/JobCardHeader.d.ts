import * as React from 'react';
import { JobcardHeaderWrapper } from '../../Style/Application/JobCardStyle';
declare const JobCardHeader: React.FunctionComponent<Props>;
export interface Props extends React.ComponentPropsWithoutRef<typeof JobcardHeaderWrapper> {
    companyNameClass?: string;
    title: string;
    tag: string;
    subtitle: string;
    imgUrl: string;
    jobTitleClass?: string;
    url?: string;
    onClickSubtitle?: React.MouseEventHandler<HTMLParagraphElement>;
    isLinkAble?: boolean;
}
export default JobCardHeader;
