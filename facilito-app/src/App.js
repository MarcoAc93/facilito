import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';
import MyAppBar from './components/navigation/app-bar';

import { withRouter } from 'react-router-dom';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.goHome = this.goHome.bind(this);
  }

  goHome(){
    this.props.history.push('/');
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <MyAppBar goHome={this.goHome}></MyAppBar>
          <TransitionGroup>
            <CSSTransition className='left-out' timeout={{enter:300, exit:300}} key={this.props.location.pathname.split('/')[0]}>
              {this.props.children}
            </CSSTransition>
          </TransitionGroup>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);
