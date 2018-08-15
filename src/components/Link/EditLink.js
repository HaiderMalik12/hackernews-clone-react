import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Loader from 'react-loader-spinner';

class EditLink extends Component {
  constructor(props) {
    super(props);
    this.titleInput = React.createRef();
    this.urlInput = React.createRef();
  }
  onFormSubmit = event => {
    event.preventDefault();
    const { id, title, url } = this.props.link;
    const { firestore } = this.props;
    const updateLink = {
      title: this.titleInput.current.value,
      url: this.urlInput.current.value
    };
    //Update the link from firestore
    firestore.update({ collection: 'links', doc: id }, updateLink).then(() => {
      this.props.history.push('/');
    });
  };
  render() {
    if (this.props.link) {
      const { id, title, url } = this.props.link;
      return (
        <div className="card card-body">
          <form onSubmit={this.onFormSubmit.bind(this)}>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                name="title"
                defaultValue={title}
                placeholder="Enter title"
                className="form-control"
                ref={this.titleInput}
              />
            </div>
            <div className="form-group">
              <label>Url</label>
              <input
                type="text"
                name="url"
                defaultValue={url}
                placeholder="Enter url"
                className="form-control"
                ref={this.urlInput}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      );
    } else {
      return <Loader type="ThreeDots" color="#007bff" height={80} width={80} />;
    }
  }
}
EditLink.propTypes = {
  link: PropTypes.object,
  firestore: PropTypes.object.isRequired
};

export default compose(
  firestoreConnect(props => [
    {
      collection: 'links',
      doc: props.match.params.id,
      storeAs: 'link'
    }
  ]),
  connect(({ firestore: { ordered } }) => ({
    link: ordered.link && ordered.link[0]
  }))
)(EditLink);
