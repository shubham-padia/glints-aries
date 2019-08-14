import * as React from 'react';
import { BadgeContainer } from '../../Style/General/BadgeStyle';
declare const Badge: React.FunctionComponent<Props>;
interface Props extends React.ComponentPropsWithoutRef<typeof BadgeContainer> {
    label: string;
    sup?: boolean;
}
export default Badge;
