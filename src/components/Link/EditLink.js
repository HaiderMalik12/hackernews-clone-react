import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as API from '../../shared/http';
import TextInput from '../FormControl/TextInput';
import { getLink, editLink } from '../../store/actions/linkActions';
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
    const { title, url } = this.props.link;
    this.props.getLink(id);
  }

  componentWillReceiveProps(nextProps, nextState) {
    const { id, title, url } = nextProps.link;
    this.setState({ title, url });
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
EditLink.propTypes = {
  link: PropTypes.object.isRequired,
  getLink: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  link: state.link.link
});
export default connect(
  mapStateToProps,
  { getLink }
)(EditLink);
