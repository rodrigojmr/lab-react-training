import React from 'react';
import './FaceBook.css';
import profiles from './../../data/berlin.json';
import IdCard from './../IdCard/IdCard';

class FaceBook extends React.Component {
  // filterCountry = (country) => {
  //   const elementsToHighlight = profileElements.filter(profile)
  // };

  render() {
    const countries = profiles.map((profile) => profile.country);
    const uniqueCountries = countries
      .filter((item, index) => {
        return countries.indexOf(item) === index;
      })
      .sort();
    const countryButtons = uniqueCountries.map((country) => {
      return <button onClick={this.filterCountry(country)}>{country}</button>;
    });

    const profileElements = profiles.map((profile) => {
      return (
        <IdCard
          key={`${profile.firstName} ${profile.lastName}`}
          picture={profile.img}
          firstName={profile.firstName}
          lastName={profile.lastName}
          country={profile.country}
          type={profile.isStudent ? 'Student' : 'Teacher'}
        />
      );
    });
    return (
      <div className="facebook">
        <div className="buttons">
          <button onClick={this.filterCountry('all')}>All</button>
          {countryButtons}
        </div>
        {profileElements}
      </div>
    );
  }
}

export default FaceBook;
