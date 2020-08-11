import React from 'react';
import './ClickablePicture.css';

class ClickablePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      img: this.props.img,
    };
  }

  toggleImageClick = () => {
    this.setState((previousState) => {
      return {
        clicked: !previousState.clicked,
        img: previousState.clicked ? this.props.img : this.props.imgClicked,
      };
    });
  };

  render() {
    return (
      <div className="clickable-picture">
        <img onClick={this.toggleImageClick} src={this.state.img} alt="Image" />
      </div>
    );
  }
}

export default ClickablePicture;
