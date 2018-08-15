import PropTypes from 'prop-types';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './Link.css';
import { firestoreConnect } from 'react-redux-firebase';

class Link extends React.Component {
  render() {
    const { id, url, title } = this.props.link;
    const { firestore } = this.props;
    return (
      <div>
        <div className="card">
          <ul className="list-group">
            <li className="list-group-item">
              {title}
              <a href={url} className="card-link" target="_blank">
                <span style={{ color: 'grey' }}>({url})</span>
              </a>{' '}
              <RouterLink to={`/links/edit/${id}`}>
                <i
                  className="fas fa-edit"
                  style={{ cursor: 'pointer', color: 'black' }}
                />
              </RouterLink>
              |
              <i
                className="fas fa-trash-alt"
                style={{ margin: 10, cursor: 'pointer' }}
                onClick={() =>
                  firestore.delete({ collection: 'links', doc: id })
                }
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

Link.propTypes = {
  link: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  firestore: PropTypes.object.isRequired
};

export default firestoreConnect()(Link);
