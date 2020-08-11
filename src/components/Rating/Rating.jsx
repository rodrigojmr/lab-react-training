import React from 'react';
import './Rating.css';

const Rating = (props) => {
  const roundNumber = Math.round(parseFloat(props.children));

  let stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < roundNumber) {
      stars.push(<span>&#9733;</span>);
    } else stars.push(<span>&#9734;</span>);
  }

  return (
    <div className="rating">
      <p>{stars}</p>
    </div>
  );
};

export default Rating;
