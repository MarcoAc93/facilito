import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { indigo600 } from 'material-ui/styles/colors';

class MyAppBar extends Component {
  render(){
    return(
      <AppBar
        title='Places'
        style={{'backgroundColor': indigo600}}
        onTitleTouchTap={this.props.goHome}
        showMenuIconButton={false}/>
    );
  }
}

export default MyAppBar;
