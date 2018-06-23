/*
 * Npm import
 */
import React from 'react';
import axios from 'axios';

/*
 * Local import
 */
import Login from 'src/components/App/Login';
import Password from 'src/components/App/Password';

const baseURL = 'http://localhost:3000';

/*
 * Component
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  state = {
    view: 'login',
    email: '',
    password: '',
    name: '',
  }

  /*
   * Lifecycles
   */
  // MOUNT / Création du composant

  // Bientot supprimé de react, attention
  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  // UPDATE / mise à jour du composant
  // Lorsque les props changent // Cas d'usage hyper rare ! Attention déprécié
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }
  // Idéal lorsque l'application commence à être lente parfait pour l'optimisation
  // Méfiez vous, ça peut être dangeureux
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }
  // ! Attention déprécié
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  /*
   * ACTIONS
   */
  // Changer de vue.
  changeView = newView => () => {
    this.setState({
      view: newView,
    });
  };

  // Réagir au champ du formulaire.
  handleInputChange = (evt) => {
    const { value, name } = evt.target;

    this.setState({
      [name]: value,
    });
  }

  // à la soumission de la connexion
  handleSubmitLogin = (evt) => {
    // Blocage du comportement par défaut
    evt.preventDefault();

    // Je décompose le state
    const { email, password } = this.state;

    // Envoyer mes infos au server (email, password)
    axios.post(`${baseURL}/login`, {
      email,
      password,
    })
    // En cas de succès
      .then((response) => {
        this.setState({
          // La réponse du serveur (le nom de l'utilisateur)
          name: response.data,
          // La nouvelle vue pour les users connectés
          view: 'logged',
        });
      })
      // En cas d'échec
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    console.log('render');
    const {
      view,
      email,
      password,
      name,
    } = this.state;

    return (
      <div id="app" className="app">
        {
          view === 'login' && <Login
            email={email}
            password={password}
            changeState={this.changeView}
            changeInput={this.handleInputChange}
            onSubmitLogin={this.handleSubmitLogin}
          />
        }
        {
          view === 'password' && <Password
            email={email}
            changeState={this.changeView}
            changeInput={this.handleInputChange}
          />
        }
        {
          view === 'logged' && <div>Bonjour {name}</div>
        }
      </div>
    );
  }
}

/*
 * Export default
 */
export default App;
