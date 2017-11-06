import React,{Component} from 'react';
import { BrowserRouter as ReactRouter, Route } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
import App from './App';

const userSignedIn = true;

export default class Router extends Component {
  signedInRoutes(){
    if(userSignedIn){
      return(
        <Route path='/new' render={() => <h1>Bienvenido</h1>}/>
      );
    }
  }
  home(){
    if(userSignedIn) return Dashboard;
    return Home;
  }
  render(){
    return(
      <ReactRouter>
        <App>
          <Route exact path='/' component={this.home()}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          {this.signedInRoutes()}
        </App>
      </ReactRouter>
    );
  }
}
