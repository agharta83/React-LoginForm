/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local import
 */


/*
 * Component
 */
const Login = ({
  type, name, placeholder, handleChange, value,
}) => (
  <input
    value={value}
    onChange={handleChange}
    className="input"
    type={type}
    name={name}
    placeholder={placeholder}
  />
);

Login.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['email', 'password']),
};


/*
 * Export default
 */
export default Login;
