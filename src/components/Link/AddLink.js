import React, { Component } from 'react';
import { Consumer } from '../../store/context';
import * as API from '../../shared/http';
import { ADD_LINK_TYPE, ERROR_TYPE } from '../../store/action_types';

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
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Enter Title"
                    value={this.state.title}
                    onChange={this.onChangeHandler}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="title">Url</label>
                  <input
                    type="text"
                    className="form-control"
                    name="url"
                    placeholder="Enter Url"
                    value={this.state.url}
                    onChange={this.onChangeHandler}
                  />
                </div>
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
