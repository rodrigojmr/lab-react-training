import React from 'react';
import './NumbersTable.css';

class NumbersTable extends React.Component {
  createSquare(number) {
    const color = number % 2 ? 'white' : 'red';
    return (
      <div className="table__item" style={{ backgroundColor: color }}>
        {number}
      </div>
    );
  }

  render() {
    const items = [];
    for (let i = 1; i <= this.props.limit; i++) {
      items.push(this.createSquare(i));
    }
    return <div className="table">{items}</div>;
  }
}

export default NumbersTable;
