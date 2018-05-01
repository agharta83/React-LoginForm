/**
 * Import NPM
 */
import React from 'react';
import Field from 'src/components/Field';
import PropTypes from 'prop-types';

/**
 * Component
 */
const Password = ({ email, changeState, changeInput }) => {
  return (
    <div className="app-password">
      <a
        className="app-link app-link--back"
        onClick={changeState('login')}
      >
        Annuler
      </a>
      <h1 className="app-title">Mot de passe oublié</h1>
      <p className="app-desc">Renseignez votre adresse e-mail et nous vous envoyons un mot de passe tout beau tout neuf.</p>
      <form className="form">
        <Field
          name="email"
          placeholder="Adresse e-mail"
          handleChange={changeInput}
          value={email}
        />
        <button className="form-submit">
          Regénérer un mot de passe
        </button>
      </form>
    </div>
  );
};

Password.propTypes = {
  email: PropTypes.string.isRequired,
  changeState: PropTypes.func.isRequired,
  changeInput: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default Password;
