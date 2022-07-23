import React, { Component } from 'react';
import iconError from '../../../assets/images/icon-error.svg';
import style from './TextField.module.css';

class TextField extends Component {
  render() {
    return (
      <form className={style.form}>
        <div>
          <div className={style['textfield-wrapper']}>
            <label htmlFor="first-name"></label>
            <input type="text" id="first-name" />
            <img src={iconError} alt="error icon" />
          </div>
          <p className={style['textfield-error']}>First Name cannot be empty</p>
        </div>
        <div>
          <div className={style['textfield-wrapper']}>
            <label htmlFor="last-name"></label>
            <input type="text" id="last-name" />
            <img src={iconError} alt="error icon" />
          </div>
          <p className={style['textfield-error']}>Last Name cannot be empty</p>
        </div>
        <div>
          <div className={style['textfield-wrapper']}>
            <label htmlFor="email"></label>
            <input type="email" id="email" />
            <img src={iconError} alt="error icon" />
          </div>
          <p className={style['textfield-error']}>
            Looks like this is not an email
          </p>
        </div>
        <div>
          <div className={style['textfield-wrapper']}>
            <label htmlFor="password"></label>
            <input type="password" id="password" />
            <img src={iconError} alt="error icon" />
          </div>
          <p className={style['textfield-error']}>Password cannot be empty</p>
        </div>
        <div>
          <button className={style['submit-btn']} type="submit">
            claim your free trial
          </button>
          <div className={style['terms-wrapper']}>
            <p className={style['terms-statement']}>
              By clicking the button, you agreeing to our
            </p>
            <button className={style['link-btn']} type="button">
              Terms and Services
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default TextField;
