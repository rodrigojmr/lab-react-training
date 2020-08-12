import React from 'react';
import './IdCard.css';

const IdCard = ({
  lastName,
  firstName,
  gender,
  height,
  birth,
  picture,
  type,
  country,
}) => {
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

  let heightInfo, typeInfo, birthInfo, countryInfo, genderInfo;

  if (height) {
    heightInfo = (
      <p>
        <strong>Height: </strong>
        {height + 'm'}
      </p>
    );
  }
  if (birth) {
    birthInfo = (
      <p>
        <strong>Birth name: </strong>
        {`${Days[birth.getDay()]} ${
          Months[birth.getMonth()]
        } ${birth.getDate()} ${birth.getFullYear()}`}
      </p>
    );
  }
  if (type) {
    typeInfo = (
      <p>
        <strong>Type: </strong>
        {type}
      </p>
    );
  }
  if (gender) {
    genderInfo = (
      <p>
        <strong>Gender: </strong>
        {gender}
      </p>
    );
  }
  if (country) {
    countryInfo = (
      <p>
        <strong>Country: </strong>
        {country}
      </p>
    );
  }

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
        {genderInfo}
        {heightInfo}
        {countryInfo}
        {typeInfo}
        {birthInfo}
      </div>
    </div>
  );
};

export default IdCard;
