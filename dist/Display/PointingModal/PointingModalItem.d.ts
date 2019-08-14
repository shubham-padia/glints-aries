import * as React from 'react';
import { PointingModalItemWrapper } from '../../Style/Display/PointingModalStyle';
declare const PointingModalItem: React.FunctionComponent<Props>;
interface Props extends React.ComponentPropsWithoutRef<typeof PointingModalItemWrapper> {
    children: React.ReactNode;
}
export default PointingModalItem;
