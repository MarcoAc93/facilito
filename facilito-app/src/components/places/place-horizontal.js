import React, { Component } from 'react';
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

class PlaceHorizontal extends Component {
  render(){
    return(
      <Card style={{'marginTop':'1em', 'overflow':'hidden'}}>
        <div className="row">
          <div className="PlaceH-avatar">
            <img src={this.props.place.avatarImage} alt=""/>
          </div>
          <div className="col-xs" style={{'textAlign':'left'}}>
            <CardHeader
              title={this.props.place.title}
              subtitle={this.props.place.address}/>
            <div className="row middle-xs">
              <div className="col-xs-6 col-md-8 col-lg-9" >
                <CardText>{this.props.place.description}</CardText>
              </div>
              <div className="col-xs">
                <CardActions>
                  <Link to={"/lugares/"+this.props.place.slug}>
                    <FlatButton label='Ver más'/>
                  </Link>
                </CardActions>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default PlaceHorizontal;
