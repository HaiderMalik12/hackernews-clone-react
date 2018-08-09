import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import { AppProvider } from './store/context';
import Links from './components/Link/Links';
import { AddLink } from './components/Link/AddLink';

class App extends Component {
  render() {
    return (
      <AppProvider>
        <BrowserRouter>
          <React.Fragment>
            <Header branding="Hacker News" />
            <Switch>
              <Route exact path="/" component={Links} />
              <Route exact path="/links/submit" component={AddLink} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </AppProvider>
    );
  }
}

export default App;
