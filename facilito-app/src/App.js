import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAppBar from './components/navigation/app-bar';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <MyAppBar></MyAppBar>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
