import * as React from 'react';
import { InformationContainer } from '../../Style/Application/InformationStyle';
import Description from './Description';
import Detail from './Detail';
import Title from './Title';
declare const Information: Information;
declare type Information = React.FunctionComponent<Props> & {
    Title: typeof Title;
    Description: typeof Description;
    Detail: typeof Detail;
};
interface Props extends React.ComponentPropsWithoutRef<typeof InformationContainer> {
    children: React.ReactNode;
}
export default Information;
