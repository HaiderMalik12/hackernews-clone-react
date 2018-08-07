import React, { Component } from 'react';
import './App.css';
import * as API from '../shared/http';
import Link from '../components/Link/Link';
import Header from '../components/Header/Header';
import ErrorMessage from '../components/Error/ErrorMessage';
import Loader from 'react-loader-spinner';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [],
      loading: true
    };
  }
  componentDidMount() {
    this.getLinks();
  }
  componentDidCatch(err, info) {
    console.error(err);
    console.error(info);
    this.setState(() => ({
      error: err
    }));
  }
  getLinks() {
    API.fetchLinks()
      .then(response => {
        this.setState(() => ({
          links: this.state.links.concat(response.data),
          loading: false
        }));
      })
      .catch(err => {
        this.setState(() => ({
          error: err
        }));
      });
  }
  deleteLink = id => {
    API.deleteLink(id)
      .then(response => {
        const newLinks = this.state.links.filter(link => link.id !== id);
        this.setState({ links: newLinks });
      })
      .catch(err => {
        this.setState(() => ({
          error: err
        }));
      });
  };
  render() {
    if (this.state.error) {
      return <ErrorMessage error={this.state.error} />;
    }
    return (
      <div>
        <Header branding="Hacker News" />
        {this.state.loading ? (
          <Loader type="ThreeDots" color="#007bff" height={80} width={80} />
        ) : (
          <div>
            {this.state.links.map(link => (
              <Link
                key={link.id}
                link={link}
                deleteLinkHandler={this.deleteLink}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default App;
