import * as React from 'react';
import JobOverViewHeader from './JobOverViewHeader';
import JobOverviewLabel from './JobOverviewLabel';
import JobOverviewBody from './JobOverviewBody';
import JobOverviewHeading from './JobOverviewHeading';
import JobOverviewLink from './JobOverviewLink';
import JobOverviewInfo from './JobOverviewInfo';
declare const JobOverview: JobOverview;
declare type JobOverview = React.FunctionComponent<Props> & {
    Header: typeof JobOverViewHeader;
    Body: typeof JobOverviewBody;
    Label: typeof JobOverviewLabel;
    Heading: typeof JobOverviewHeading;
    Link: typeof JobOverviewLink;
    Info: typeof JobOverviewInfo;
};
interface Props {
    children: React.ReactNode;
}
export default JobOverview;
