import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import { AppProvider } from './store/context';
import Links from './components/Link/Links';
import { AddLink } from './components/Link/AddLink';
import NotFound from './components/NotFound/NotFound';
import { EditLink } from './components/Link/EditLink';

class App extends Component {
  render() {
    return (
      <AppProvider>
        <HashRouter>
          <React.Fragment>
            <Header branding="Hacker News" />
            <Switch>
              <Route exact path="/" component={Links} />
              <Route exact path="/links/submit" component={AddLink} />
              <Route exact path="/links/edit/:id" component={EditLink} />
              <Route exact component={NotFound} />
            </Switch>
          </React.Fragment>
        </HashRouter>
      </AppProvider>
    );
  }
}

export default App;
