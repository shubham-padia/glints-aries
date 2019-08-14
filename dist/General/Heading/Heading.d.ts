import * as React from 'react';
import { HeadingContainer } from '../../Style/General/HeadingStyle';
declare const Heading: React.FunctionComponent<Props>;
interface Props extends React.ComponentPropsWithoutRef<typeof HeadingContainer> {
    children: React.ReactNode;
}
export default Heading;
