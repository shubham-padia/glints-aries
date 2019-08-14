import * as React from 'react';
import { SwipeableItemWrapper } from '../../Style/Display/SwipeableStyle';
declare const SwipeableItem: React.FunctionComponent<Props>;
interface Props extends React.ComponentPropsWithoutRef<typeof SwipeableItemWrapper> {
    children: React.ReactNode;
}
export default SwipeableItem;
