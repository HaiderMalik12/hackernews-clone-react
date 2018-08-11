import React, { Component } from 'react';
import Link from './Link';
import Loader from 'react-loader-spinner';
import * as API from '../../shared/http';

export default class Links extends Component {
  state = { links: [] };
  componentDidMount() {
    this.getLinks();
  }
  getLinks() {
    API.fetchLinks()
      .then(response => {
        this.setState(() => ({
          links: this.state.links.concat(response.data)
        }));
      })
      .catch(err => {
        this.setState(() => ({
          error: err
        }));
      });
  }
  render() {
    return (
      <React.Fragment>
        {!this.state.links.length ? (
          <Loader type="ThreeDots" color="#007bff" height={80} width={80} />
        ) : (
          <div>
            {this.state.links.map(link => (
              <Link key={link.id} link={link} />
            ))}
          </div>
        )}
      </React.Fragment>
    );
  }
}
