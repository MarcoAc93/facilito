import React, { Component } from 'react';

class PlaceHorizontal extends Component {
  render(){
    return(
      <h1 style={{'textAlign':'left'}}>{this.props.place.title}</h1>
    );
  }
}

export default PlaceHorizontal;
