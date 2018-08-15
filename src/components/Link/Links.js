import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import Link from './Link';

class Links extends Component {
  state = {
    links: [{ id: '1', url: 'http://fullstackhour.com', title: 'Learn Node' }]
  };
  componentDidMount() {
    //1.
    //Fetch all the links from the firebase
  }
  render() {
    const { links } = this.state;
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
  ).isRequired
};

export default Links;
