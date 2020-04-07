import React from 'react';
import './App.css';
import UserCard from './components/UserCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: []
    }
  }

  componentDidMount(){ 
    let newUser = {
      name: 'Evan',
      title: 'web developer'
    };
    this.setState({
      userData: newUser
    })
  }
  
  // componentDidUpdate(){ }

  // componentDidUnmount(){ }

  render() {
    return (
      <div className="App">
        <p>App</p>
        <UserCard userData={this.state.userData} />
      </div>
    );
  }

}

export default App;
