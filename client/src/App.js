import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Login from "./components/Login/Login";
import Signup from './components/Signup/Signup';
import Profile from './components/Profile/Profile';
import Matches from './components/Matches/Matches';




class App extends Component {
  
  state ={
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });

  };


  render(){
    let props = this.state.startDate;
    return (
      <>
      <BrowserRouter>
        <div className='App'>
          <Route exact path='/' component={Main}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/profile' component={Profile}/>
          <Route exact path='/matches' component={Matches}/>
        </div>
      </BrowserRouter>
      </>
    )
  }
}

export default App;