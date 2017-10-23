import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Title from '../components/title';


class Header extends Component{
  render() {
    return(
      <div className="Header-background">
        <div style={{'width':'80%', 'marging':'0 auto'}}>
          <div className='Header-main'>
            <Title/>
            <RaisedButton label='Crear cuenta gratuita aquí' secondary/>
            <img className='Header-illustration' src={process.env.PUBLIC_URL+'/images/place.png'} height='300px' alt=""/>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
