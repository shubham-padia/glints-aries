import * as React from 'react';
import { TagContainer } from '../../Style/General/TagStyle';
declare const Tag: React.FunctionComponent<Props>;
interface Props extends React.ComponentPropsWithoutRef<typeof TagContainer> {
    children: React.ReactNode;
    theme: string;
}
export default Tag;
