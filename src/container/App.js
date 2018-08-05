import React, { Component } from 'react';
import './App.css';
import * as API from '../shared/http';
import Link from '../components/Link/Link';
import Header from '../components/Header/Header';
import ErrorMessage from '../components/Error/ErrorMessage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: []
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
    if (this.state.error) {
      return <ErrorMessage error={this.state.error} />;
    }
    return (
      <div>
        <Header branding="Hacker News" />
        {this.state.links.map(link => <Link key={link.id} link={link} />)}
      </div>
    );
  }
}

export default App;
