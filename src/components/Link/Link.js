import React from 'react';
import PropTypes from 'prop-types';
import './Link.css';

const Link = props => {
  const { url, title, id } = props.link;
  const { deleteLinkHandler } = props;
  return (
    <div>
      <div className="card">
        <ul className="list-group">
          <li className="list-group-item">
            {title}
            <a href={url} className="card-link" target="_blank">
              <span style={{ color: 'grey' }}>({url})</span>
            </a>{' '}
            |
            <i
              className="fas fa-trash-alt"
              style={{ margin: 10, cursor: 'pointer' }}
              onClick={() => deleteLinkHandler(id)}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
Link.propTypes = {
  link: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }),
  deleteLinkHandler: PropTypes.func.isRequired
};
export default Link;
