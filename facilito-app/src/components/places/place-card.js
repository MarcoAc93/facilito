import React, { Component } from 'react';
import { Card, CardText, CardMedia, CardTitle, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';
import CSSTransition from 'react-transition-group/CSSTransition';

class PlaceCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: true
    }

  }
  render(){
    return(
      <CSSTransition
        classNames='fade-scale'
        in={this.props.in}
        >
        <div className='col-xs-12 col-sm-4' key={this.props.index}>
          <Card>
            <CardMedia>
              <img src={`${process.env.PUBLIC_URL}/images${this.props.place.imageUrl}`} alt=""/>
            </CardMedia>
            <CardTitle title={this.props.place.title}></CardTitle>
            <CardText>{this.props.place.description}</CardText>
            <CardActions style={{'textAlign':'right'}}>
              <FlatButton secondary label='Ver más'/>
              <FlatButton onClick={() => {this.props.onRemove(this.props.place)}} secondary label='Ocultar'/>
            </CardActions>
          </Card>
        </div>
      </CSSTransition>
    );
  }
}

export default PlaceCard;
