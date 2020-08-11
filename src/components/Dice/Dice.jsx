import React from 'react';
import './Dice.css';

class Dice extends React.Component {
  constructor() {
    super();
    this.state = {
      rolling: false,
      likes: 0,
      dice: `/img/dice${Math.ceil(Math.random() * 6)}.png`,
    };
    this.emptyDice = '/img/dice-empty.png';
  }

  rollDice = () => {
    if (!this.state.rolling) {
      this.setState({
        dice: `/img/dice-empty.png`,
        rolling: true,
      });
      setTimeout(() => {
        this.setState({
          dice: `/img/dice${Math.ceil(Math.random() * 6)}.png`,
          rolling: false,
        });
      }, 1000);
    }
  };

  render() {
    return (
      <div className="dice">
        <img
          className="dice__img"
          src={this.state.dice}
          onClick={this.rollDice}
        ></img>
      </div>
    );
  }
}

export default Dice;
