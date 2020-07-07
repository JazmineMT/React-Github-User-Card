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
    } 

    return (
        <div>
          <div className='header'>
            <h1>Search GitHub Accounts</h1>
          </div> 
            <div className='search'>
                <input
                className= 'input'
                label="Type in Username"
                type="text"
                value={this.state.userText}
                onChange={this.handleChanges}
                variant='filled'
                />
                <button onClick={this.fetchUsers}>Search</button>
            </div>
         
          <Card info={this.state.user} />
        </div>
    )
  
}
 
}

export default App;
