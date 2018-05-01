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
import Profil from 'src/components/App/Profil';
import LoginError from 'src/components/App/LoginError';
import GeneratePassword from 'src/components/App/GeneratePassword';
/*
 * Component
 */
class App extends React.Component {
  state = {
    view: 'login',
    email: '',
    password: '',
  }

  /*
  * Soumission du formulaire de connexion
  */
  onSubmit = (evt) => {
    evt.preventDefault();

    // On fait la requête
    axios.post('http://localhost:3000/login', {
      email: this.state.email,
      password: this.state.password,
    })
      .then((response) => {
        console.log(response);
        // On change la vue pour affiché la page Profil
        this.setState({
          view: 'profil',
          name: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        // On affiche la vue lorsqu'il y a une erreur de connexion
        this.setState({
          view: 'loginError',
        });
      });
  };

  /*
   * Soumission du formulaire password
   */
  forgottenPassword = (evt) => {
    evt.preventDefault();
    // On fait la requête Axios pour récupérer le password
    axios.post('http://localhost:3000/forgot', {
      email: this.state.email,
    })
      .then((response) => {
        console.log(response);
        // On change la vue pour informer que le nouveau password a bien été envoyé
        //
        this.setState({
          view: 'GeneratePassword',
        });
      })
      .catch((error) => {
        console.log(error);
        // On affiche la vue lorsqu'il n'y a pas de match
        this.setState({
          view: 'loginError',
        });
      });
  };

  /*
   * Réagir au champ du formulaire.
   */
  handleInputChange = (evt) => {
    const { value, name } = evt.target;

    this.setState({
      [name]: value,
    });
  };

  /*
  * Changer de vue.
  */
  changeView = newView => () => {
    this.setState({
      view: newView,
    });
  };

  render() {
    const {
      view, email, password, name,
    } = this.state;

    return (
      <div id="app" className="app">
        {
          view === 'login' && <Login
            email={email}
            password={password}
            changeState={this.changeView}
            changeInput={this.handleInputChange}
            submit={this.onSubmit}
          />
        }
        {
          view === 'password' && <Password
            email={email}
            changeState={this.changeView}
            changeInput={this.handleInputChange}
            forgottenPassword={this.forgottenPassword}
          />
        }
        {
          view === 'profil' && <Profil
            name={name}
          />
        }
        {
          view === 'loginError' && <LoginError
            changeState={this.changeView}
          />
        }
        {
          view === 'GeneratePassword' && <GeneratePassword
            changeState={this.changeView}
          />
        }
      </div>
    );
  }
}

/*
 * Export default
 */
export default App;
