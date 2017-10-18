import { Grid, Image } from 'semantic-ui-react';
const React = require('react');

export default class Title extends React.Component {
  render(){
    return(
      <Grid centered columns={2}>
        <Grid.Row centered columns={3}>
          <Grid.Column>
            <h1>Places</h1>
            <p>Descubre lugares de manera simple</p>
          </Grid.Column>
          <Grid.Column>
            <Image centered height='300' src={process.env.PUBLIC_URL+'/images/place.png'} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
