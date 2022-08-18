import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import planetList from './data/planets';
import Missions from './components/Missions';
import missionsList from './data/missions';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SolarSystem headline="Planetas" planetList={ planetList } />
        <Missions headline="Missões" missionList={ missionsList } />
      </div>
    );
  }
}

export default App;
