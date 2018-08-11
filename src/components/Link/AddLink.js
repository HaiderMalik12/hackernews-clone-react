import React, { Component } from 'react';
import * as API from '../../shared/http';
import TextInput from '../FormControl/TextInput';

export class AddLink extends Component {
  state = {
    title: '',
    url: '',
    errors: {}
  };

  onChangeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  onFormSubmit = async event => {
    event.preventDefault();
    const { title, url } = this.state;
    if (title === '') {
      this.setState({ errors: { title: 'title is required field' } });
      return;
    }
    if (url === '') {
      this.setState({ errors: { url: 'url is required field' } });
      return;
    }
    const newLink = { title, url, id: Date.now().toString() };
    //Disptach Action here
    this.setState({ title: '', url: '', errors: {} });
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
            error={this.state.errors.title}
          />

          <TextInput
            label="Url"
            type="text"
            name="url"
            value={this.state.url}
            placeholder="Enter url"
            onChange={this.onChangeHandler}
            error={this.state.errors.url}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddLink;
