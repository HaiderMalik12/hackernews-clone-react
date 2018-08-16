import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';

import Header from './components/Header/Header';
import Links from './components/Link/Links';
import AddLink from './components/Link/AddLink';
import NotFound from './components/NotFound/NotFound';
import EditLink from './components/Link/EditLink';
import store from './store';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import { UserIsAuthenticated, UserIsNotAuthenticated } from './helpers/auth';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <Header branding="Hacker News" />
            <Switch>
              <Route exact path="/" component={UserIsAuthenticated(Links)} />
              <Route
                exact
                path="/links/submit"
                component={UserIsAuthenticated(AddLink)}
              />
              <Route
                exact
                path="/signup"
                component={UserIsNotAuthenticated(Signup)}
              />
              <Route
                exact
                path="/login"
                component={UserIsNotAuthenticated(Login)}
              />
              <Route
                exact
                path="/links/edit/:id"
                component={UserIsAuthenticated(EditLink)}
              />
              <Route exact component={NotFound} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
