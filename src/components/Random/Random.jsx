import React from 'react';
import './Random.css';

const Random = ({ min, max }) => {
  const num = Math.floor(Math.random() * (max - min)) + min;

  return (
    <div className="random">
      <p>
        Random value between {min} and {max} =&gt; {num}
      </p>
    </div>
  );
};

export default Random;
