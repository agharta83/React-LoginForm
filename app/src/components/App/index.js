/*
 * Npm import
 */
import React from 'react';

/*
 * Local import
 */
import Login from 'src/components/App/Login';
import Password from 'src/components/App/Password';

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
  * Requête AXIOS
  */
  onSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.state.password);
  };

  /**
   * Réagir au champ du formulaire.
   */
  handleInputChange = (evt) => {
    const { value, name } = evt.target;

    this.setState({
      [name]: value,
    });
  };

  /**
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
      </div>
    );
  }
}

/*
 * Export default
 */
export default App;
