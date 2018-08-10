import React, { Component } from 'react';
import { Consumer } from '../../store/context';
import * as API from '../../shared/http';
import { ERROR_TYPE, EDIT_LINK_TYPE } from '../../store/action_types';
import TextInput from '../FormControl/TextInput';

export class EditLink extends Component {
  state = {
    title: '',
    url: ''
  };

  onChangeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };
  async componentDidMount() {
    const { id } = this.props.match.params;
    const { data } = await API.getLinkById(id);
    this.setState({ title: data.title, url: data.url });
  }

  onFormSubmit = async (dispatch, event) => {
    try {
      event.preventDefault();
      const { title, url } = this.state;
      const { id } = this.props.match.params;
      const newLink = { title, url };
      const { data } = await API.updateLink(id, newLink);
      dispatch({ type: EDIT_LINK_TYPE, payload: data });
      this.setState({ title: '', url: '' });
      this.props.history.push('/');
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
                  Save
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditLink;
