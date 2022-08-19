import React from 'react';
import PropType from 'prop-types';
import Title from './Title';
import MissionCard from './MissionCard';
import missionList from '../data/missions';

class Missions extends React.Component {
  render() {
    const {
      headline = 'Missões',
    } = this.props;
    const missions = missionList.map((mission) => (
      <MissionCard
        key={ mission.name }
        name={ mission.name }
        year={ mission.year }
        country={ mission.country }
        destination={ mission.destination }
      />
    ));
    return (
      <div data-testid="missions">
        <Title headline={ headline } />
        <section className="mission-card">
          {missions}
        </section>
      </div>
    );
  }
}

Missions.propTypes = {
  headline: PropType.string.isRequired,
};

export default Missions;
