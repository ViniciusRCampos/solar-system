import React from 'react';
import PropType from 'prop-types';
import Title from './Title';

class Missions extends React.Component {
  render() {
    const { headline = 'Missões' } = this.props;
    return (
      <div data-testid="missions">
        <Title headline={ headline } />
      </div>
    );
  }
}

Missions.propTypes = {
  headline: PropType.string.isRequired,
};

export default Missions;
