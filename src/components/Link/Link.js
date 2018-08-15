import PropTypes from 'prop-types';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './Link.css';

class Link extends React.Component {
  render() {
    const { id, url, title } = this.props.link;
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
  deleteLink: PropTypes.func.isRequired
};
export default Link;
