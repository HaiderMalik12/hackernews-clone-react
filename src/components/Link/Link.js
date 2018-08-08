import React from 'react';
import PropTypes from 'prop-types';
import './Link.css';
import { Consumer } from '../../store/context';
import * as API from '../../shared/http';
import { DELETE_LINK_TYPE } from '../../store/action_types';

const Link = props => {
  async function deleteLinkHandler(id, dispatch) {
    try {
      await API.deleteLink(id);
      dispatch({ type: DELETE_LINK_TYPE, payload: id });
    } catch (err) {}
  }
  return (
    <Consumer>
      {value => {
        const { url, title, id } = props.link;
        const { dispatch } = value;
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
                    onClick={() => deleteLinkHandler(id, dispatch)}
                  />
                </li>
              </ul>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};
Link.propTypes = {
  link: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })
};
export default Link;
