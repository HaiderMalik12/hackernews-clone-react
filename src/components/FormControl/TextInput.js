import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInput = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor="title">{label}</label>
      <input
        type={type}
        className={classnames('form-control', {
          //if there is any value inside error then add the is-invalid class
          'is-invalid': error
        })}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};
TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
export default TextInput;
