import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';




class App extends Component {
  




  render(){
    return (
      <>
      <BrowserRouter>
        <div className='App'>
          <Route exact path='/' component={Main}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={Signup}/>
        </div>
      </BrowserRouter>
      </>
    )
  }
}

export default App;