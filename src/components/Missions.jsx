import React from 'react';
import PropType from 'prop-types';
import Title from './Title';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    const missionDefault = [{
      name: 'Mariner 2',
      year: '1962',
      country: 'USA',
      destination: 'Vênus',
    }];
    const {
      headline = 'Missões',
      missionList = missionDefault,
    } = this.props;
    const missions = missionList.map((mission) => (
      <MissionCard
        key={ mission.name }
        mission={ mission }
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
  missionList: PropType.arrayOf(PropType.shape({})).isRequired,
};

export default Missions;
