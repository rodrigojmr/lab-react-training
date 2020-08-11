import React from 'react';
import './LikeButton.css';

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      color: 'blue',
    };
    this.colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  }

  addLikeClick = () => {
    this.randomColor();
    this.setState({
      likes: this.state.likes + 1,
    });
  };

  randomColor = () => {
    const randomIndex = Math.round(Math.random() * (this.colors.length - 1));
    console.log('randomIndex: ', randomIndex);
    this.setState({
      color: this.colors[randomIndex],
    });
  };

  render() {
    return (
      <button
        className="like-btn"
        style={{ backgroundColor: this.state.color }}
        onClick={this.addLikeClick}
      >
        {this.state.likes} Likes
      </button>
    );
  }
}

export default LikeButton;
