import React from 'react';
import './IdCard.css';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  const Days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const Months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <div className="id-card">
      <img
        src={picture}
        alt={{ firstName } + ' ' + { lastName } + `'s Icon`}
        className="id-card__img"
      />
      <div className="id-card__info">
        <p>
          <strong>First name: </strong>
          {firstName}
        </p>
        <p>
          <strong>Last name: </strong>
          {lastName}
        </p>
        <p>
          <strong>Gender: </strong>
          {gender}
        </p>
        <p>
          <strong>Height: </strong>
          {height + 'm'}
        </p>
        <p>
          <strong>Birth name: </strong>
          {`${Days[birth.getDay()]} ${
            Months[birth.getMonth()]
          } ${birth.getDate()} ${birth.getFullYear()}`}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
