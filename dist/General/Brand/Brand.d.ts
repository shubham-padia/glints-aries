import * as React from 'react';
import { BrandContainer } from '../../Style/General/BrandStyle';
declare class Brand extends React.Component<Props> {
    handleRightClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    render(): JSX.Element;
}
interface Props extends React.ComponentPropsWithoutRef<typeof BrandContainer> {
    asset: string;
    alt: HTMLImageElement['alt'];
    className?: string;
    rightClickURL?: string;
    onContextMenu?(): void;
}
export default Brand;
