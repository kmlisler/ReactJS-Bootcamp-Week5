import React, { Component } from "react";
import {Card,CardTitle,CardText} from "reactstrap"

class Celcius extends Component {
 
 
  render() {
    return (
      <div>
        <Card body style={{backgroundImage: "linear-gradient(to right, #c471ed, #f64f59)" }} inverse>
          <CardTitle tag="h5">{this.props.title}</CardTitle>
          <CardText>
            Measure of temperature in Celcius : <b>{this.props.currentTemperature}  °C</b>
          </CardText>
        </Card>
      
      </div>
    );
  }
}

export default Celcius;
