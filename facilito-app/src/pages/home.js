import React, {Component} from 'react';

import Benefits from '../components/benefits';
import Header from '../components/header';
import PlaceCard from '../components/places/place-card';

import data from '../request/places';

import { indigo400 } from 'material-ui/styles/colors';


export default class Home extends Component {
  constructor(props){
    super(props);
    this.hidePlace = this.hidePlace.bind(this);
    this.state = {
      places: data.places
    }
  }

  places(){
    return this.state.places.map((place, index) => {
      return(
        <PlaceCard onRemove={this.hidePlace} place={place} key={index}/>
      );
    })
  }

  hidePlace(place){
    this.setState({places:this.state.places.filter(element => element !== place)})
  }

  render(){
    return(
      <section>
        <Header/>
        <div>
          <Benefits/>
        </div>
        <div style={{'backgroundColor':indigo400, 'padding':'50px', color:'white'}}>
          <h3 style={{'fontSize':'24px'}}>Sitios Populares</h3>
          <div className="row">
            {this.places()}
          </div>
        </div>
      </section>
    );
  }
}
