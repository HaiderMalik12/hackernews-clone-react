import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import Link from './Link';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

class Links extends Component {
  render() {
    const { links } = this.props;
    return (
      <React.Fragment>
        {links ? (
          <React.Fragment>
            {links.map(link => (
              <Link key={link.id} link={link} />
            ))}
          </React.Fragment>
        ) : (
          <Loader type="ThreeDots" color="#007bff" height={80} width={80} />
        )}
      </React.Fragment>
    );
  }
}
Links.propTypes = {
  firestore: PropTypes.object.isRequired,
  links: PropTypes.array
};

export default compose(
  firestoreConnect(props => [{ collection: 'links' }]),
  connect(state => ({
    links: state.firestore.ordered.links
  }))
)(Links);
