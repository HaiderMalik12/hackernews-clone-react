import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import { AppProvider } from './store/context';
import Links from './components/Link/Links';
import { AddLink } from './components/Link/AddLink';

class App extends Component {
  // deleteLink = id => {
  //   API.deleteLink(id)
  //     .then(response => {
  //       const newLinks = this.state.links.filter(link => link.id !== id);
  //       this.setState({ links: newLinks });
  //     })
  //     .catch(err => {
  //       this.setState(() => ({
  //         error: err
  //       }));
  //     });
  // };
  render() {
    return (
      <AppProvider>
        <React.Fragment>
          <Header branding="Hacker News" />
          <AddLink />
          <Links />
        </React.Fragment>
      </AppProvider>
    );
  }
}

export default App;
