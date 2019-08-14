import * as React from 'react';
import { BreadcrumbContainer } from '../../Style/Navigation/BreadcrumbStyle';
import BreadcrumbItem from './BreadcrumbItem';
declare const Breadcrumb: Breadcrumb;
declare type Breadcrumb = React.FunctionComponent<Props> & {
    Item: typeof BreadcrumbItem;
};
interface Props extends React.ComponentPropsWithoutRef<typeof BreadcrumbContainer> {
    children: React.ReactNode;
}
export default Breadcrumb;
