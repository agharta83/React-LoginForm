/*
 * Import NPM
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Component
 */
// Whaaat ?! Linter s'affole ?!
const Profil = ({ name }) => (
  <div id="profil">
    <h1 className="welcome">Bienvenue {name} !</h1>
  </div>
);

Profil.propTypes = {
  name: PropTypes.string.isRequired,
};

/*
 * Export
 */
export default Profil;
