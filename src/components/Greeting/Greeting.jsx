import React from 'react';
import './Greeting.css';

const Greeting = ({ lang, children }) => {
  let greeting;

  switch (lang) {
    case 'de':
      greeting = 'Hallo';
      break;
    case 'en':
      greeting = 'Hello';
      break;
    case 'es':
      greeting = '¡Hola';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    default:
      break;
  }

  return (
    <div className="greeting">
      <p>
        {greeting} {children}!
      </p>
    </div>
  );
};

export default Greeting;
