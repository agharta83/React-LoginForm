/**
 * Import NPM
 */
import React from 'react';
import Field from 'src/components/Field';
import PropTypes from 'prop-types';

/**
 * Component
 */
const Login = ({
  email,
  password,
  changeState,
  changeInput,
  onSubmitLogin,
}) => (
  <div className="app-login">
    <h1 className="app-title">Connexion</h1>
    <p className="app-desc">Renseignez votre adresse e-mail et votre mot de passe pour accéder à votre compte.</p>
    <form className="form" onSubmit={onSubmitLogin}>
      <Field
        name="email"
        placeholder="Adresse e-mail"
        handleChange={changeInput}
        value={email}
      />
      <Field
        name="password"
        placeholder="Mot de passe"
        handleChange={changeInput}
        type="password"
        value={password}
      />
      <button className="form-submit form-submit--login">
          Se connecter
      </button>
      <a
        className="app-link"
        onClick={changeState('password')}
      >
          Mot de passe oublié
      </a>
    </form>
  </div>
);

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeState: PropTypes.func.isRequired,
  changeInput: PropTypes.func.isRequired,
  onSubmitLogin: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default Login;
