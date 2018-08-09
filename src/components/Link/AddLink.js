import React, { Component } from 'react';
import { Consumer } from '../../store/context';
import * as API from '../../shared/http';
import { ADD_LINK_TYPE, ERROR_TYPE } from '../../store/action_types';
import TextInput from '../FormControl/TextInput';

export class AddLink extends Component {
  state = {
    title: '',
    url: ''
  };

  onChangeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  onFormSubmit = async (dispatch, event) => {
    try {
      event.preventDefault();
      const newLink = { ...this.state, id: Date.now().toString() };
      const { data } = await API.createLink(newLink);
      dispatch({ type: ADD_LINK_TYPE, payload: data });
      this.setState({ title: '', url: '' });
    } catch (err) {
      dispatch({ type: ERROR_TYPE, payload: err });
    }
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body">
              <form onSubmit={this.onFormSubmit.bind(this, dispatch)}>
                <TextInput
                  label="Title"
                  type="text"
                  name="title"
                  value={this.state.title}
                  placeholder="Enter title"
                  onChange={this.onChangeHandler}
                />

                <TextInput
                  label="Url"
                  type="text"
                  name="url"
                  value={this.state.url}
                  placeholder="Enter url"
                  onChange={this.onChangeHandler}
                />
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddLink;
