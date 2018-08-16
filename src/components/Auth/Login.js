import React, { Component } from 'react';
import TextInput from '../FormControl/TextInput';
import { firebaseConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  };

  onChangeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { firebase } = this.props;
    if (email === '') {
      this.setState({ errors: { email: 'email is required field' } });
      return;
    }
    if (password === '') {
      this.setState({ errors: { password: 'password is required field' } });
      return;
    }
    const user = { email, password };
    //Disptach Action here
    //Save new link to firestore
    firebase
      .login(user)
      .then(() => {
        alert('User loggedIn');
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="card card-body">
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <TextInput
            label="Email"
            type="email"
            name="email"
            value={this.state.email}
            placeholder="Enter email"
            onChange={this.onChangeHandler}
            error={this.state.errors.title}
          />

          <TextInput
            label="Password"
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Enter password"
            onChange={this.onChangeHandler}
            error={this.state.errors.password}
          />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}
Login.propTypes = {
  firebase: PropTypes.object.isRequired
};
export default firebaseConnect()(Login);
