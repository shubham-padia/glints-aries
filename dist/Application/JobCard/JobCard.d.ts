import * as React from 'react';
import { JobCardWrapper } from '../../Style/Application/JobCardStyle';
declare class JobCard extends React.Component<Props> {
    static Header: React.FunctionComponent<import("./JobCardHeader").Props>;
    static Body: React.FunctionComponent<import("./JobCardBody").Props>;
    static Detail: React.FunctionComponent<import("./JobCardDetail").Props>;
    static Description: React.FunctionComponent<import("./JobCardDescription").Props>;
    static Footer: React.FunctionComponent<import("./JobCardFooter").Props>;
    renderLinkChild: () => React.ReactElement<ChildProps, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>[];
    renderNonLinkChild: () => React.ReactElement<ChildProps, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>[];
    render(): JSX.Element;
}
interface ChildProps {
    isLinkAble: boolean;
    className: string;
    target: string;
}
interface Props extends React.ComponentPropsWithoutRef<typeof JobCardWrapper> {
    children: React.ReactNode;
    targetUrl: string;
    target?: string;
}
export default JobCard;
