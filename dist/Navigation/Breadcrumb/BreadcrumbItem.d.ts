import * as React from 'react';
import { BreadcrumbItemWrapper } from '../../Style/Navigation/BreadcrumbStyle';
declare const BreadcrumbItem: React.FunctionComponent<Props>;
interface Props extends React.ComponentPropsWithoutRef<typeof BreadcrumbItemWrapper> {
    children: React.ReactNode;
}
export default BreadcrumbItem;
