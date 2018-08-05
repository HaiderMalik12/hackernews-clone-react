import React, { Component } from 'react';
import './App.css';
import * as API from '../shared/http';
import Link from '../components/Link/Link';
import Header from '../components/Header/Header';

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
  getLinks() {
    API.fetchLinks()
      .then(response => {
        this.setState(() => ({
          links: this.state.links.concat(response.data)
        }));
      })
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    return (
      <div>
        <Header branding="Hacker News" />
        {this.state.links.map(link => <Link key={link.id} link={link} />)}
      </div>
    );
  }
}

export default App;
