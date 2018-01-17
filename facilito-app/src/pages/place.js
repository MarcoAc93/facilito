import React,{ Component } from 'react';
import { connect } from 'react-redux';

import Container from '../components/container'
import { Card } from 'material-ui/Card';
import { getPlace } from '../request/places';
import '../App.css';

class Place extends Component {
  constructor(props){
    super(props);
    const slug = props.match.params.slug;
    this.loadPlace(slug);
    this.state = {
      place: {}
    }
  }

  loadPlace(slug){
    getPlace(slug).then(data => {
      this.setState({place:data});
    })
  }

  render(){
    const { place } = this.state;
    return(
      <div className='Place-container'>
        <header className='Place-cover' style={{'backgroundImage':'url('+place.coverImage+')'}}></header>
        <Container>
          <div className="row">
            <div className="col-xs-12 col-md-8">
              <Card className='Place-card'>
                <div className="row">
                  <div className="col-xs-12 col-sm-3 col-lg-2">
                    <img src={place.avatarImage} style={{'maxWidth':'100%'}} alt=""/>
                  </div>
                  <div className="col-xs">
                    <h1>{place.title}</h1>
                    <address>{place.address}</address>
                    <p>{place.description}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state, ownProp) {
  return {
    places: state.places
  }
}

export default connect(mapStateToProps)(Place);