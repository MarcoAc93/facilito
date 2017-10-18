import React, { Component } from 'react';
import { Card, Button, Segment } from 'semantic-ui-react';

import Title from './components/title';

import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <div>
          <Segment textAlign='left' size='massive' inverted color='blue'>
            <b>Places</b>
            <Button floated='right' compact secondary>Crear Cuenta</Button>
          </Segment>
          <div>
            <Title></Title>
          </div>
          <div>
            <ul>
              <Card >
                <Card.Content>
                  <img src={process.env.PUBLIC_URL+'/images/heart.png'}/>
                  <h3>Calificaciones con emociones</h3>
                  <p>Califica tus lugares con experiencias, no con numeros</p>
                </Card.Content>
              </Card>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
