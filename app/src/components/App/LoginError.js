/*
 * Import NPM
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Component
 */

const LoginError = ({ changeState }) => (
  <div id="login-error">
    <h1>Echec d'authentification</h1>
    <p>Cliquez sur le lien pour recommencer</p>
    <a
      className="app-link app-link--back"
      onClick={changeState('login')}
    >
        Page authentification
    </a>
  </div>
);

LoginError.propTypes = {
  changeState: PropTypes.func.isRequired,
};

/*
 * Export
 */
export default LoginError;
