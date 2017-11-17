import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Container from '../components/container';
import PlaceHorizontal from '../components/places/place-horizontal';

import {getPlaces} from '../request/places';

class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state = {
      places: []
    }
    this.loadPlaces();
  }

  loadPlaces() {
    getPlaces().then(jsonR => {
      this.setState({places:jsonR.docs});
    })
  }

  places(){
    return this.state.places.map((place, index) => {
      return <PlaceHorizontal place={place} key={index}/>
    })
  }

  render(){
    return(
      <div>
        <Link to='/new'>
          <FloatingActionButton secondary={true} className='FAB'> <ContentAdd /> </FloatingActionButton>
        </Link>
        <Container>
          <div className="row">
            <div className="col-xs-12 col-md-2" style={{'textAlign':'left'}}>
              <FlatButton label="Explorar" />
              <FlatButton label="Favoritos" />
              <FlatButton label="Visitas previas" />
            </div>
            <div className="col-xs-12 col-md-10">
              {this.places()}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
