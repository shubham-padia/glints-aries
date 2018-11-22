/* @flow */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

import { SliderContainer, SliderContentWrapper } from '../../Style/Display/SliderStyle';

class Slider extends Component <Props, State> {
  constructor() {
    super();
    this.state = {
      translateValue: 0,
      screenSize: 0,
      index: 1,
      isFocus: false,
    };
    this.sliderContainer = null;
  }

  previousSlide = () => {
    const { index, translateValue, screenSize } = this.state;
    if (index !== 1) {
      this.setState({
        index: index - 1,
        translateValue: translateValue + screenSize,
        isFocus: document.activeElement === ReactDOM.findDOMNode(this.sliderContainer),
      });
    }
  }

  nextSlide = () => {
    const { index, translateValue, screenSize } = this.state;
    const { children } = this.props;
    if (index !== children.length) {
      this.setState({
        index: index + 1,
        translateValue: translateValue - screenSize,
        isFocus: document.activeElement === ReactDOM.findDOMNode(this.sliderContainer),
      });
    }
  }

  setSize = () => {
    const { index } = this.state;
    const windowWidth = ReactDOM.findDOMNode(this.sliderContainer).getBoundingClientRect().width;
    this.setState({
      screenSize: ReactDOM.findDOMNode(this.sliderContainer).getBoundingClientRect().width,
      translateValue: -(windowWidth * (index - 1)),
    });
  }

  handleDotClick = (idx) => {
    const { screenSize } = this.state;

    this.setState({
      index: idx + 1,
      translateValue: -(screenSize * idx),
      isFocus: document.activeElement === ReactDOM.findDOMNode(this.sliderContainer),
    });
  }

  handleBlur = () => {
    this.setState({
      isFocus: false,
    });
  }

  componentDidMount() {
    const { initialItem, children } = this.props;
    const windowWidth = ReactDOM.findDOMNode(this.sliderContainer).getBoundingClientRect().width;

    this.setState({
      screenSize: windowWidth,
    });

    if (initialItem !== undefined) {
      if (initialItem > 0 && initialItem <= children.length) {
        this.setState({
          translateValue: -(windowWidth * (initialItem - 1)),
          index: initialItem,
        });
      } else {
        this.setState({
          translateValue: 0,
          index: 1,
        });
      }
    }

    window.addEventListener('resize', this.setSize);
  }

  componentWillReceiveProps(nextProps) {
    const windowWidth = ReactDOM.findDOMNode(this.sliderContainer).getBoundingClientRect().width;

    this.setState({
      translateValue: -(windowWidth * (nextProps.initialItem - 1)),
      index: nextProps.initialItem,
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setSize);
  }

  render() {
    const {
      children,
      className,
      fullContent,
      arrowWhite,
      removeDots,
    } = this.props;
    const { translateValue, index, isFocus } = this.state;

    return (
      <SliderContainer
        ref={(node) => { this.sliderContainer = node; }}
        className={className}
        onBlur={this.handleBlur}
        fullContent={fullContent}
        tabIndex="0"
      >
        <SliderContentWrapper
          style={{
            transform: `translateX(${translateValue}px)`,
            transition: 'transform ease-out 0.45s',
          }}
        >
          { children }
        </SliderContentWrapper>
        <LeftArrow
          previousSlide={this.previousSlide}
          index={index}
          arrowWhite={arrowWhite}
        />
        <RightArrow
          nextSlide={this.nextSlide}
          index={index}
          limit={children.length}
          arrowWhite={arrowWhite}
        />
        {!removeDots && (
          <ul>
            {children.map((data, idx) => (
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
              <li
                className={idx + 1 === index && 'active'}
                onClick={() => this.handleDotClick(idx)}
              ></li>
            ))}
          </ul>
        )}
      </SliderContainer>
    );
  }
}

type Props = {
  children: React$Node,
  className: string,
  initialItem: number,
  fullContent: boolean,
  arrowWhite: boolean,
  removeDots: boolean,
};

type State = {
  translateValue: number,
  index: number,
  screenSize: number,
  isFocus: boolean,
};

export default Slider;
