import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ label, type, name, placeholder, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="title">{label}</label>
      <input
        type={type}
        className="form-control"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
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
