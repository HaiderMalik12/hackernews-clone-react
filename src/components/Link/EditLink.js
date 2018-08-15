import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TextInput from '../FormControl/TextInput';

class EditLink extends Component {
  state = {
    title: '',
    url: ''
  };

  onChangeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    // this.props.getLink(id);
  }

  onFormSubmit = event => {
    event.preventDefault();
    const { title, url } = this.state;
    const { id } = this.props.match.params;
    const newLink = { title, url };
    //Update the link from firestore
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
EditLink.propTypes = {
  link: PropTypes.object.isRequired,
  getLink: PropTypes.func.isRequired,
  updateLink: PropTypes.func.isRequired
};
export default EditLink;
