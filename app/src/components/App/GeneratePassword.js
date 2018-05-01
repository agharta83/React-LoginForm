/*
 * Import NPM
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Component
 */

const GeneratePassword = ({ changeState }) => (
  <div>
    <h1>Generation du mot de passe réussi</h1>
    <p>Surveillez votre boite mail !</p>
    <a
      className="app-link app-link--back"
      onClick={changeState('login')}
    >
        Page authentification
    </a>
  </div>
);

GeneratePassword.propTypes = {
  changeState: PropTypes.func.isRequired,
};
/*
 * Export
 */
export default GeneratePassword;
