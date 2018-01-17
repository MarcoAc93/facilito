import React, {Component} from 'react';
import { connect } from 'react-redux';

import Benefits from '../components/benefits';
import Header from '../components/header';
import PlaceCard from '../components/places/place-card';
import Container from '../components/container';

import { getPlaces } from '../request/places';

import { indigo400 } from 'material-ui/styles/colors';
import TransitionGroup from 'react-transition-group/TransitionGroup';


class Home extends Component {
  constructor(props){
    super(props);
    this.hidePlace = this.hidePlace.bind(this);
    this.state = {
      places: []
    };
    console.log(this.props.places);
  }

  loadPlaces() {
    getPlaces().then(jsonR => {
      const places = jsonR.docs;

    });
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
        <Container>
          <Header/>
          <div>
            <Benefits/>
          </div>
          <div style={{'backgroundColor':indigo400, 'padding':'50px', color:'white'}}>
            <h3 style={{'fontSize':'24px'}}>Sitios Populares</h3>
            <TransitionGroup className="row">
              {this.places()}
            </TransitionGroup>
          </div>
        </Container>
      </section>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    places: state.places
  }
}

export default connect(mapStateToProps)(Home);