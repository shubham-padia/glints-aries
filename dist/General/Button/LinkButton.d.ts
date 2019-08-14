import * as React from 'react';
import { LinkBtn } from '../../Style/General/ButtonStyle';
declare const LinkButton: React.FunctionComponent<Props>;
interface Props extends React.ComponentPropsWithoutRef<typeof LinkBtn> {
    children: React.ReactNode;
    className: string;
}
export default LinkButton;
