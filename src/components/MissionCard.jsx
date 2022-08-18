import React from 'react';
import PropType from 'prop-types';
import './MissionCard.css';

class MissionCard extends React.Component {
  render() {
    const { mission: { name, year, country, destination } } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <p data-testid="mission-name">
          <span>Name: </span>
          {' '}
          { name }
        </p>
        <p ddata-testid="mission-year">
          <span>Year:</span>
          {' '}
          { year }
        </p>

        <p data-testid="mission-country">
          Country:
          {' '}
          { country }
        </p>

        <p data-testid="mission-destination">
          Destination:
          {' '}
          { destination }
        </p>

      </div>
    );
  }
}

MissionCard.propTypes = {
  mission: PropType.shape({
    name: PropType.string.isRequired,
    year: PropType.number.isRequired,
    country: PropType.string.isRequired,
    destination: PropType.string.isRequired,
  }).isRequired,
};

export default MissionCard;
