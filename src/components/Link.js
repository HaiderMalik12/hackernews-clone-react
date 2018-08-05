import React from 'react';

const Link = props => {
  return (
    <div>
      <p>
        {' '}
        {props.link.title}
        <span>
          (<a href={props.link.url}> {props.link.url} </a>)
        </span>
      </p>
    </div>
  );
};
export default Link;
