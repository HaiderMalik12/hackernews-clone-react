import React, { Component } from 'react';
import './App.css';
import * as API from '../shared/http';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: []
    };
  }
  componentDidMount() {
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
      <div className="App">
        <h1>App component</h1>
      </div>
    );
  }
}

export default App;
