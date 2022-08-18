import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import planetList from './data/planets';
import Missions from './components/Missions';
import missionList from './data/missions';

class App extends React.Component {
  render() {
    console.log('APP', missionList);
    return (
      <div>
        <Header />
        <SolarSystem headline="Planetas" planetList={ planetList } />
        <Missions headline="Missões" missionList={ missionList } />
      </div>
    );
  }
}

export default App;
