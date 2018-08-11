import React, { Component } from 'react';
import Link from './Link';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import * as API from '../../shared/http';
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
