import TextField from './components/forms/TextField/TextField';
import Offer from './components/dumb/Offer/Offer';
import Title from './components/dumb/Title/Title';
import bgMobile from './assets/images/bg-intro-mobile.png';
import bgDesktop from './assets/images/bg-intro-desktop.png';
import style from './App.module.css';

import React, { Component } from 'react';

class App extends Component {
  render() {
    const imageUrl = window.innerWidth < 1440 ? bgMobile : bgDesktop;
    return (
      <div
        style={{
          display: 'grid',
          backgroundColor: 'rgb(255, 122, 122)',
          backgroundImage: `url(${imageUrl})`,
          paddingInline: '1.5rem',
          minHeight: '100vh',
        }}
        className={style['main-app']}
      >
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
