import * as React from 'react';
import SwipeableItem from './SwipeableItem';
declare const Swipeable: Swipeable;
declare type Swipeable = React.FunctionComponent<Props> & {
    Item: typeof SwipeableItem;
};
interface Props {
    children: React.ReactNode;
    className?: string;
}
export default Swipeable;
