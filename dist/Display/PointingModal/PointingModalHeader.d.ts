import * as React from 'react';
import { PointingModalHeaderWrapper } from '../../Style/Display/PointingModalStyle';
declare const PointingModalHeader: React.FunctionComponent<Props>;
interface Props extends React.ComponentPropsWithoutRef<typeof PointingModalHeaderWrapper> {
    children: React.ReactNode;
}
export default PointingModalHeader;
