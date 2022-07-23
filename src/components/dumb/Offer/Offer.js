import React, { Component } from 'react';
import style from './Offer.module.css';

class Offer extends Component {
  render() {
    return (
      <div className={style['offer-wrapper']}>
        <span>Try it free 7 days </span>
        then $20/mo. thereafter
      </div>
    );
  }
}

export default Offer;
