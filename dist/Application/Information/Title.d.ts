import * as React from 'react';
import { TitleWrapper } from '../../Style/Application/InformationStyle';
declare const Title: React.FunctionComponent<Props>;
interface Props extends React.ComponentPropsWithoutRef<typeof TitleWrapper> {
    children: React.ReactNode;
    bold: boolean;
}
export default Title;
