/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Local import
 */


/**
 * Code
 */
const Field = ({
  type, name, placeholder, handleChange, value,
}) => {
  const fieldClassNames = classNames(
    'field',
    { 'field--has-value': value !== '' },
  );

  return (
    <div className={fieldClassNames}>
      <input
        id={name}
        value={value}
        onChange={handleChange}
        className="field-input"
        type={type}
        name={name}
        placeholder={placeholder}
      />
      <label
        htmlFor={name}
        className="field-label"
      >
        {placeholder}
      </label>
    </div>
  );
};

Field.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email', 'num']),
};

Field.defaultProps = {
  type: 'text',
  value: '',
};

/**
 * Export
 */
export default Field;
