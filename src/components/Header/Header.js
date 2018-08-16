import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';

class Header extends Component {
  state = {
    isAuth: false
  };
  //when user has loggedIn this method will be called
  //when user has logout this method will be called
  //when state changes it will called
  static getDerivedStateFromProps(props) {
    const { auth } = props;
    if (auth.uid) {
      return { isAuth: true };
    } else {
      return { isAuth: false };
    }
  }
  render() {
    const { isAuth } = this.state;
    const { firebase } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
          {this.props.branding}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                New
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Top
              </a>
            </li>
            {isAuth && (
              <li className="nav-item">
                <Link className="nav-link" to="/links/submit">
                  Submit
                </Link>
              </li>
            )}
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                />
                <button
                  className="btn btn-secondary my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </li>
            {!isAuth ? (
              <React.Fragment>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </React.Fragment>
            ) : (
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#!"
                  onClick={() => firebase.logout()}
                >
                  Logout
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}
Header.propTypes = {
  branding: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired,
  firebase: PropTypes.object.isRequired
};
export default compose(
  firebaseConnect(),
  connect((state, props) => ({
    auth: state.firebase.auth
  }))
)(Header);
