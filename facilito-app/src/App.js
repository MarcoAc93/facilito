import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './pages/home'

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Home/>
      </MuiThemeProvider>
    );
  }
}

export default App;
