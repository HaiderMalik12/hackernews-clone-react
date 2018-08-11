import React, { Component } from 'react';
import * as API from '../../shared/http';
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
    //Fetch the link by id
  }

  onFormSubmit = async (dispatch, event) => {
    event.preventDefault();
    const { title, url } = this.state;
    const { id } = this.props.match.params;
    const newLink = { title, url };
    //Dispatch Edit Action
    this.setState({ title: '', url: '' });
    this.props.history.push('/');
  };
  render() {
    return (
      <div className="card card-body">
        <form onSubmit={this.onFormSubmit.bind(this)}>
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
  }
}

export default EditLink;
