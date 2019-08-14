import * as React from 'react';
declare const JobCardDetail: React.FunctionComponent<Props>;
export interface Props {
    details: Array<React.ReactNode & React.Attributes>;
    id: String;
    isLinkAble?: boolean;
}
export default JobCardDetail;
