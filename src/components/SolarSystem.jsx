import React from 'react';
import PropType from 'prop-types';
import PlanetCard from './PlanetCard';
import Title from './Title';
import './SolarSystem.css';
import planetList from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const {
      headline = 'Planetas',
    } = this.props;
    const planets = planetList.map((planet) => (
      <PlanetCard
        key={ planet.name }
        planetName={ planet.name }
        planetImage={ planet.image }
      />
    ));
    return (
      <div data-testid="solar-system">
        <Title headline={ headline } />
        <section className="planet-section">
          {planets}
        </section>

      </div>
    );
  }
}

SolarSystem.propTypes = {
  headline: PropType.string.isRequired,
  planetList: PropType.arrayOf(PropType.shape({})).isRequired,
};

export default SolarSystem;
