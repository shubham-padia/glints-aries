import * as React from 'react';
import { BlockquoteContainer } from '../../Style/Display/EmployersBlockquoteStyle';
declare const Blockquote: (props: Props) => JSX.Element;
interface Props extends React.ComponentPropsWithoutRef<typeof BlockquoteContainer> {
    children: React.ReactNode;
    profileURL: string;
    alt: string;
    profileName: string;
    additionalInfo: string;
}
export default Blockquote;
