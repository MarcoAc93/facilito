import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Title from '../components/title';
import Container from '../components/container';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends Component {
  render(){
    return(
      <div className='row middle-xs'>
        <div className="col-xs-6">
          <Container>
            <div style={{'textAlign':'left'}}>
              <Title />
              <TextField floatingLabelText='Correo Electronico' type='email' className='textfield'/>
              <TextField floatingLabelText='Contraseña' type='password' className='textfield'/>
              <div className='Login-actions'>
                <Link to='/signup' style={{'marginRight':'1em'}}>Crear nueva cuenta</Link>
                <RaisedButton label='Ingresar' secondary={true}/>
              </div>
            </div>
          </Container>
        </div>
        <div className="col-sx-12 col-md-6">
          <div className="Login-background" style={{'backgroundImage':"url("+process.env.PUBLIC_URL+'/images/Login-background.png'+")"}}></div>
        </div>
      </div>
    );
  }
}

export default Login;
