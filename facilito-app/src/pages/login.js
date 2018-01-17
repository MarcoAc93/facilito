import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Title from '../components/title';
import Container from '../components/container';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { login } from '../request/login';

class Login extends Component {
  constructor(props){
    super(props);
    this.requestAuth = this.requestAuth.bind(this);
  }

  requestAuth(){
    const credentials = {
      email: this.refs.emailField.getValue(),
      password: this.refs.passwordField.getValue()
    }
    login(credentials).then(console.log).catch(console.log);
  }

  render(){
    return(
      <div className='row middle-xs'>
        <div className="col-xs-6">
          <Container>
            <div style={{'textAlign':'left'}}>
              <Title />
              <TextField floatingLabelText='Correo Electronico' type='email' className='textfield' ref='emailField'/>
              <TextField floatingLabelText='Contraseña' type='password' className='textfield' ref='passwordField'/>
              <div className='Login-actions'>
                <Link to='/signup' style={{'marginRight':'1em'}}>Crear nueva cuenta</Link>
                <RaisedButton label='Ingresar' secondary={true} onClick={this.requestAuth}/>
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

function mapStateToProps(state, ownProps){
  return{
    user: state.user
  }
}

export default connect(mapStateToProps)(Login);
