import React, { Component } from 'react';
import iconError from '../../../assets/images/icon-error.svg';
import regex from '../../../utils/helpers/validationHelpers';
import style from './TextField.module.css';

class TextField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      errors: {},
      isValid: true,
    };
  }

  inputValueHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  formValidation = () => {
    const { firstName, lastName, email, password } = this.state;
    let isValid = true;
    const errors = {};

    if (!firstName.trim().length) {
      errors.firstNameLength = 'First Name cannot be empty';
      isValid = false;
    }

    if (!lastName.trim().length) {
      errors.lastNameLength = 'Last Name cannot be empty';
      isValid = false;
    }
    if (!email.toLowerCase().match(regex)) {
      errors.email = 'Looks like this is not an email';
      isValid = false;
    }
    if (!password.trim().length) {
      errors.passwordLength = 'Password cannot be empty';
      isValid = false;
    }

    this.setState({ errors: errors });
    return isValid;
  };

  onSubmit = (e) => {
    const isValid = this.formValidation();
    if (!isValid) {
      e.preventDefault();
    }
  };

  render() {
    const { firstName, lastName, email, password, errors } = this.state;
    const icon = <img src={iconError} alt="error icon" />;

    return (
      <form className={style.form} onSubmit={this.onSubmit} noValidate>
        <div>
          <div className={style['textfield-wrapper']}>
            <label htmlFor="first-name"></label>
            <input
              type="text"
              id="first-name"
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={this.inputValueHandler}
            />

            {errors.hasOwnProperty('firstNameLength') && icon}

            {/* <img src={iconError} alt="error icon" /> */}
          </div>
          <p className={style['textfield-error']}>{errors.firstNameLength}</p>
        </div>
        <div>
          <div className={style['textfield-wrapper']}>
            <label htmlFor="last-name"></label>
            <input
              type="text"
              id="last-name"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={this.inputValueHandler}
            />
            {errors.hasOwnProperty('lastNameLength') && icon}
          </div>
          <p className={style['textfield-error']}>{errors.lastNameLength}</p>
        </div>
        <div>
          <div className={style['textfield-wrapper']}>
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={this.inputValueHandler}
            />
            {errors.hasOwnProperty('email') && icon}
          </div>
          <p className={style['textfield-error']}>{errors.email}</p>
        </div>
        <div>
          <div className={style['textfield-wrapper']}>
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.inputValueHandler}
            />
            {errors.hasOwnProperty('passwordLength') && icon}
          </div>
          <p className={style['textfield-error']}>{errors.passwordLength}</p>
        </div>
        <div>
          <button className={style['submit-btn']} type="submit">
            claim your free trial
          </button>
          <div className={style['terms-wrapper']}>
            <p className={style['terms-statement']}>
              By clicking the button, you agreeing to our
              <span className={style['link-text']}> Terms and Services</span>
            </p>
          </div>
        </div>
      </form>
    );
  }
}

export default TextField;
