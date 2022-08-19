import React from 'react';
import PropType from 'prop-types';
import './MissionCard.css';
import missionList from '../data/missions';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <p data-testid="mission-name">
          <span>Name: </span>
          { name }
        </p>
        <p data-testid="mission-year">
          <span>Year: </span>
          { year }
        </p>

        <p data-testid="mission-country">
          <span>Country: </span>
          { country }
        </p>

        <p data-testid="mission-destination">
          <span>Destination: </span>
          { destination }
        </p>

      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropType.string.isRequired,
  year: PropType.number.isRequired,
  country: PropType.string.isRequired,
  destination: PropType.string.isRequired,
};

export default MissionCard;
