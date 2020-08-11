import React from 'react';
import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greeting from './components/Greeting/Greeting';
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor';
import CreditCard from './components/Credit Card/CreditCard';
import Rating from './components/Rating/Rating';

function App() {
  return (
    <div className="App">
      <div className="component-row">
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
      </div>
      <div className="component-row">
        <Greeting lang="en">Jorge</Greeting>
        <Greeting lang="fr">François</Greeting>
        <Greeting lang="de">Ludwig</Greeting>
      </div>
      <div className="component-row">
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <div className="component-row">
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      <div className="component-row component-row--credit-cards">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
      <div className="component-row">
        <Rating>4</Rating>
        <Rating>2</Rating>
      </div>
    </div>
  );
}

export default App;
