/*
 * Npm import
 */
import React from 'react';


/*
 * Local import
 */
import Login from 'src/components/App/Login';

/*
 * Code
 */
// Tableau pour nos champs

const fields = [
  {
    name: 'email',
    placeholder: 'Votre email',
    type: 'email',
  },
  {
    name: 'password',
    placeholder: 'Votre mot de passe',
    type: 'password',
  },
];

// Component
class App extends React.Component {
  /*
   * State
   */
  state = {}
  /*
   * handlers
   */

  handleChange = (evt) => {
    // Je récupère la valeur et le nom
    const { value, name } = evt.target;

    // Je modifie le state
    this.setState({
      [name]: value,
    });
  }

  /*
   * rendu
   */
  render() {
    return (
      <div id="app">
        <form className="form">
          <h1 className="app-title">CONNEXION</h1>
          <p className="app-desc">Renseignez votre adresse e-mail et votre mot de passe pour accéder à votre compte.</p>
          {fields.map(field => (
            <Login
              key={field.name}
              value={this.state[field.name]}
              handleChange={this.handleChange}
              {...field}
            />
        ))}
          <button className="form-submit form-submit--login" type="submit">SE CONNECTER</button>
          <p className="app-link">Mot de passe oublié ?</p>
        </form>
      </div>
    );
  }
}


/*
 * Export
 */
export default App;
