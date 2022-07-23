import TextField from './components/forms/TextField/TextField';
import Offer from './components/dumb/Offer/Offer';
import Title from './components/dumb/Title/Title';
import './App.css';

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="title-section">
          <Title />
        </section>
        <section className="offer-section">
          <Offer />
          <TextField />
        </section>
      </div>
    );
  }
}

export default App;
