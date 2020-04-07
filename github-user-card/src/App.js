import React from 'react';
import axios from 'axios';
import './App.css';

import UserCard from './components/UserCard';
import MyFollowers from './components/MyFollwers';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: {},
      followers: []
    }
  }

  componentDidMount(){ 
    // axios get user data
    axios.get('https://api.github.com/users/easpaas')
    .then(response => {
      console.log(response.data.followers_url)
      this.setState({
        userData: response.data
      })
    })
    .catch(error => {
      console.log(error)
    })


    // axios get(`${this.state.userData.followers_url}`) list of followers
    axios.get(`https://api.github.com/users/easpaas/followers`)
    .then(response => {
      console.log(response.data)
      this.setState({
        followers: response.data
      })
    })
    .catch(error => {
      console.log(error)
    })

  }
  
  // componentDidUpdate(){ }

  // componentDidUnmount(){ }

  render() {
    return (
      <div className="App">
        <UserCard userData={this.state.userData} />
        <MyFollowers followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
