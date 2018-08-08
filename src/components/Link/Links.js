import React, { Component } from 'react';
import Link from './Link';
import Loader from 'react-loader-spinner';
import { Consumer } from '../../Context';

export default class Links extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              {!value.links.length ? (
                <Loader
                  type="ThreeDots"
                  color="#007bff"
                  height={80}
                  width={80}
                />
              ) : (
                <div>
                  {value.links.map(link => <Link key={link.id} link={link} />)}
                </div>
              )}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
