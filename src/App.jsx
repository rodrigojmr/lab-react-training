import React from 'react';
import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greeting from './components/Greeting/Greeting';
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor';
import CreditCard from './components/Credit Card/CreditCard';
import Rating from './components/Rating/Rating';
import DriverCard from './components/Driver Card/DriverCard';
import LikeButton from './components/LikeButton/LikeButton';
import ClickablePicture from './components/ClickablePicture/ClickablePicture';
import Dice from './components/Dice/Dice';
import Carousel from './components/Carousel/Carousel';
import NumbersTable from './components/NumbersTable/NumbersTable';
import FaceBook from './components/FaceBook/FaceBook';
import SignupPage from './components/SignupPage/SignupPage';

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
      <div className="component-row">
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: 'Toyota Corolla Altis',
            licensePlate: 'CO42DE',
          }}
        />
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: 'Audi A3',
            licensePlate: 'BE33ER',
          }}
        />
      </div>
      <div className="component-row">
        <LikeButton /> <LikeButton />
      </div>
      <div className="component-row">
        <ClickablePicture
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png"
        />
      </div>
      <div className="component-row">
        <Dice />
      </div>
      <div className="component-row">
        <Carousel
          imgs={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg',
          ]}
        />
      </div>
      <div className="component-row">
        <NumbersTable limit={12} />
      </div>
      <div className="component-row">
        <FaceBook />
      </div>
      <div className="component-row">
        <SignupPage />
      </div>
    </div>
  );
}

export default App;
