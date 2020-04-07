import React from 'react';
import axios from 'axios';
import './App.css';

import UserCard from './components/UserCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: {}
    }
  }

  componentDidMount(){ 
    axios.get('https://api.github.com/users/easpaas')
    .then(response => {
      console.log(response.data)
      this.setState({
        userData: response.data
      })
    })
    .catch(error => {
      console.log(error.message)
    })
    // })
    // let newUser = {
    //   name: 'Evan',
    //   title: 'web developer'
    // };
    // this.setState({
    //   userData: newUser
    // })
  }
  
  // componentDidUpdate(){ }

  // componentDidUnmount(){ }

  render() {
    return (
      <div className="App">
        <UserCard userData={this.state.userData} />
      </div>
    );
  }

}

export default App;
