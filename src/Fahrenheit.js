import React, { Component } from "react";
import {Card,CardTitle,CardText} from "reactstrap"

export default class Fahrenheit extends Component {
  
  render() {
    let convertedValue = (this.props.currentTemperature*1.8) +32
    return (
      <div>
        <Card body style={{backgroundImage: "linear-gradient(to right, #544a7d, #ffd452)" }} inverse>
          <CardTitle tag="h5">{this.props.title}</CardTitle>
          <CardText>
          Measure of temperature in Fahrenheit : <b> {convertedValue} °F</b>
          </CardText>

        </Card>
      </div>
    );
  }
}
