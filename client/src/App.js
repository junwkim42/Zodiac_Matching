import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Login from './components/Login/Login';




class App extends Component {
  




  render(){
    return (
      <>
      <BrowserRouter>
        <div className='App'>
          <Route exact path='/' component={Main}/>
          <Route exact path='/login' component={Login}/>
        </div>
      </BrowserRouter>
      </>
    )
  }
}

export default App;