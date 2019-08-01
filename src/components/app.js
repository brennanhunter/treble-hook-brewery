import React, { Component } from 'react';

import BreweryContainer from './brewery-container';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <BreweryContainer />
      </div>
    );
  }
}
