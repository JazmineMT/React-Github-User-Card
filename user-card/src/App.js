import React from 'react';
import ReactDom from 'react-dom'
import './App.css';
import Card from "./components/Card"
import axios from 'axios'




class App extends React.Component {
  constructor(){
    super();
    this.state = {
      userText: '' ,
      user: [] ,
    }
    
  }

  componentDidMount(){
    axios.get(`https://api.github.com/users/jazmineMT`)
    .then(res => {
      this.setState({
        user: res.data
      })
    })
  }

  handleChanges = e =>{
    this.setState({
      userText: e.target.value
    })
  }

  fetchUsers = e => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.userText}`)
    .then( res => {
      this.setState({
          user: res.data
      });
    })
  }



  render()
    {
    if (this.state.user.length === 0 ){
      return <p>Fetching Data</p>
    } else{

    return (
        <div>
          <h1>Github User Info</h1>
          <input
          type="text"
          value={this.state.userText}
          onChange={this.handleChanges}
          />
          <button onClick={this.fetchUsers}>Search by Username</button>
          <Card info={this.state.user} />
        </div>
    )
  }
}
 
}

export default App;
