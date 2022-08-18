import React from 'react';
import PropType from 'prop-types';
import PlanetCard from './PlanetCard';
import Title from './Title';
import TerraImg from '../images/Terra.png';
import './SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    const {
      headline = 'Planetas',
      planetList = [{ name: 'Terra', image: TerraImg }],
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
        <section clasName="planet-section">
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
