import React, { Component } from 'react';
import Terpopuler from './Terpopuler';
import CaraKerja from './CaraKerja';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <CaraKerja />
        <Terpopuler />
      </div>
    );
  }
}

export default LandingPage;