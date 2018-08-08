import React, { Component } from 'react';
import * as API from './shared/http';
import ErrorMessage from './components/Error/ErrorMessage';

//Provider component
// Consumer
const AppContext = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_LINK':
      return {
        ...state,
        links: state.links.filter(link => link.id !== action.payload)
      };
    default:
      return state;
  }
};
export class AppProvider extends Component {
  state = {
    links: [],
    dispatch: action => {
      return this.setState(state => {
        return reducer(state, action);
      });
    }
  };

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
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
export const Consumer = AppContext.Consumer;
