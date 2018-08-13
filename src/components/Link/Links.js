import React, { Component } from 'react';
import Link from './Link';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { getLinks } from '../../store/actions/linkActions';

class Links extends Component {
  componentDidMount() {
    //1.
    this.props.getLinks();
  }
  render() {
    const { links } = this.props;
    return (
      <React.Fragment>
        {!links.length ? (
          <Loader type="ThreeDots" color="#007bff" height={80} width={80} />
        ) : (
          <div>
            {links.map(link => (
              <Link key={link.id} link={link} />
            ))}
          </div>
        )}
      </React.Fragment>
    );
  }
}
Links.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  getLinks: PropTypes.func.isRequired
};
const mapStateToProps = state => {
  return {
    links: state.link.links
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getLinks: () => dispatch(getLinks())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Links);
