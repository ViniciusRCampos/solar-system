import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import planetList from './data/planets';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem headline="Planetas" planetList={ planetList } />
      </div>
    );
  }
}

export default App;
