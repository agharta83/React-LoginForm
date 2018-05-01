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
  * Soumission du formulaire
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
      })
      .catch((error) => {
        console.log(error);
      });

    // On change la vue pour affiché la page Profil
    this.setState({
      view: 'profil',
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
    const { view, email, password } = this.state;

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
          />
        }
        {
          view === 'profil' && <Profil />
        }
      </div>
    );
  }
}

/*
 * Export default
 */
export default App;
