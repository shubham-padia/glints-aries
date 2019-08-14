import * as React from 'react';
import Slider from '../../Display/Slider';
declare class Gallery extends React.Component<Props, State> {
    sliderRef: React.RefObject<Slider>;
    state: {
        visible: boolean;
        currentIndex: number;
        imageLeft: number;
    };
    constructor(props: Props);
    closeModal: () => void;
    handleClick: (index: number) => void;
    handleClickThumbs: (index: number) => void;
    getCurrentIndex: (index: number) => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props, nextState: State): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
interface Props {
    children?: React.ReactNode;
}
interface State {
    visible: boolean;
    currentIndex: number;
    imageLeft: number;
}
export default Gallery;
