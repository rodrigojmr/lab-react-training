import React from 'react';
import './CreditCard.css';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  let cardType;

  const numberSecure = (number) => {
    const lastNumbers = number.slice(number.length - 4);
    return `•••• •••• •••• ${lastNumbers}`;
  };

  switch (type) {
    case 'Visa':
      cardType = '/img/visa.png';
      break;
    case 'Master Card':
      cardType = '/img/master-card.svg';
      break;
    default:
      break;
  }

  const style = {
    color: color,
    backgroundColor: bgColor,
  };

  return (
    <div className="credit-card" style={style}>
      <div className="type">
        <img className="type__img" src={cardType} />
      </div>
      <div className="number">
        <span>{numberSecure(number)}</span>
      </div>
      <div className="expires-bank">
        <span>
          Expires {expirationMonth} {expirationYear}
        </span>
        <span>{bank}</span>
      </div>
      <div className="owner">
        <span>{owner}</span>
      </div>
    </div>
  );
};

export default CreditCard;
