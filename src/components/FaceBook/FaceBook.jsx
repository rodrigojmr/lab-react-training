import React from 'react';
import './FaceBook.css';
import profiles from './../../data/berlin.json';
import IdCard from './../IdCard/IdCard';

class FaceBook extends React.Component {
  constructor() {
    super();
    this.state = {
      country: undefined,
    };
  }

  filterProfiles = (country) => {
    this.setState({
      country,
    });
  };

  render() {
    const countries = profiles
      .map((profile) => profile.country)
      .filter((item, index, originalArray) => {
        return originalArray.indexOf(item) === index;
      })
      .sort();
    const countryButtons = countries.map((country) => {
      return (
        <button
          key={country}
          onClick={() => this.filterProfiles(country)}
          style={{
            backgroundColor:
              this.state.country === country ? 'lightblue' : 'initial',
          }}
        >
          {country}
        </button>
      );
    });

    const profileElements = profiles.map((profile) => {
      return (
        <IdCard
          selected={profile.country === this.state.country}
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
          <button
            onClick={() => this.filterProfiles()}
            style={{
              backgroundColor:
                this.state.country === undefined ? 'lightblue' : 'initial',
            }}
          >
            All
          </button>
          {countryButtons}
        </div>
        {profileElements}
      </div>
    );
  }
}

export default FaceBook;
