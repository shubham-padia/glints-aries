import * as React from 'react';
import { PointingModalBodyWrapper } from '../../Style/Display/PointingModalStyle';
declare const PointingModalBody: React.FunctionComponent<Props>;
interface Props extends React.ComponentPropsWithoutRef<typeof PointingModalBodyWrapper> {
    children: React.ReactNode;
}
export default PointingModalBody;
