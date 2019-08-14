import * as React from 'react';
declare class Slider extends React.Component<Props, State> {
    static Item: React.FunctionComponent<import("./SliderItem").Props>;
    interval: ReturnType<typeof setTimeout>;
    sliderContainerRef: React.RefObject<HTMLDivElement>;
    constructor(props: Props);
    previousSlide: () => void;
    nextSlide: () => void;
    setSize: () => void;
    handleDotClick: (idx: number) => void;
    handleKeyDown: (e: React.KeyboardEvent<Element>) => void;
    getSliderContainerDOMNode(): Element;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: Props): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
interface Props {
    children: React.ReactNode;
    className?: string;
    initialItem?: number;
    fullContent?: boolean;
    arrowWhite?: boolean;
    removeDots?: boolean;
    afterChange?: Function;
    autoplay?: boolean;
}
interface State {
    translateValue: number;
    index: number;
    screenSize: number;
}
export default Slider;
