import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ name, label, onChange, placeholder, value, error }) => {
  const wrapperClass =
    error && error.length > 0 ? "form-group" : "form-group has-error";

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>
        {label}
        <div className="field">
          <input
            type="text"
            name={name}
            label={label}
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </label>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
