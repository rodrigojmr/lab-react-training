import React from 'react';
import './Carousel.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImg: this.props.imgs[0],
      currentIndex: 0,
    };
  }

  changeImagePrevious = () => {
    this.setState((previousState) => {
      const prevIndex =
        previousState.currentIndex === 0
          ? this.props.imgs.length - 1
          : previousState.currentIndex - 1;
      return {
        currentIndex: prevIndex,
        currentImg: this.props.imgs[prevIndex],
      };
    });
  };

  changeImageNext = () => {
    this.setState((previousState) => {
      const nextIndex =
        previousState.currentIndex >= this.props.imgs.length - 1
          ? 0
          : previousState.currentIndex + 1;
      return {
        currentIndex: nextIndex,
        currentImg: this.props.imgs[nextIndex],
      };
    });
  };

  render() {
    return (
      <div className="carousel">
        <button
          onClick={this.changeImagePrevious}
          className="carousel__button carousel__button--prev"
        >
          Previous Image
        </button>
        <div className="carousel__img-wrapper">
          <img src={this.state.currentImg} className="carousel__img" />
        </div>
        <button
          onClick={this.changeImageNext}
          className="carousel__button carousel__button--next"
        >
          next Image
        </button>
      </div>
    );
  }
}

export default Carousel;
