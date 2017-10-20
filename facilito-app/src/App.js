import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardText } from 'material-ui/Card'
import Title from './components/title';

import './App.css';
import { indigo400, redA400, lightBlueA400, amberA400 } from 'material-ui/styles/colors';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="Header-background">
          <div style={{'width':'80%', 'marging':'0 auto'}}>
            <div className='Header-main'>
              <Title></Title>
              <RaisedButton label='Crear cuenta gratuita aquí' secondary/>
              <img className='Header-illustration' src={process.env.PUBLIC_URL+'/images/place.png'} height='300px' alt=""/>
            </div>
          </div>
        </div>
        <div>
          <ul>
            <Card className='Header-Benefit'>
              <CardText >
                <div className="row">
                  <div className="Header-Benefit-image" style={{'backgroundColor':redA400}}>
                    <img src={process.env.PUBLIC_URL+'/images/heart.png'} alt=""/>
                  </div>
                  <div className="Header-Benefit-Content">
                    <h3>Califica con emociones</h3>
                    <p>Califica tus lugares con experiencias, no con numeros</p>
                  </div>
                </div>
              </CardText>
            </Card>
            <Card className='Header-Benefit'>
              <CardText >
                <div className="row">
                  <div className="Header-Benefit-image" style={{'backgroundColor':lightBlueA400}}>
                    <img src={process.env.PUBLIC_URL+'/images/no-internet.png'} alt=""/>
                  </div>
                  <div className="Header-Benefit-Content">
                    <h3>Sin internet? Sin problemas</h3>
                    <p>Places puede funcionar sin internet</p>
                  </div>
                </div>
              </CardText>
            </Card>
            <Card className='Header-Benefit'>
              <CardText >
                <div className="row">
                  <div className="Header-Benefit-image" style={{'backgroundColor':amberA400}}>
                    <img src={process.env.PUBLIC_URL+'/images/star.png'} alt=""/>
                  </div>
                  <div className="Header-Benefit-Content">
                    <h3>Guarda tus lugares favoritos</h3>
                    <p>Siempre tenlos a la mano agregandoles a favoritos</p>
                  </div>
                </div>
              </CardText>
            </Card>
          </ul>
        </div>
        <div style={{'backgroundColor':indigo400, 'padding':'50px'}}></div>
      </MuiThemeProvider>
    );
  }
}

export default App;
