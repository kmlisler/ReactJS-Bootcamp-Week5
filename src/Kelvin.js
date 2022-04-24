import React, { Component } from "react";
import {Card,CardTitle,CardText} from "reactstrap"

export default class Kelvin extends Component {
  render() {
    let convertedValue = this.props.currentTemperature + 273.15
    return (
      <div>

        <Card body style={{backgroundImage: "linear-gradient(to right, #59C173, #a17fe0,#5D26C1)" }} inverse>
          <CardTitle tag="h5">{this.props.title}</CardTitle>
          <CardText>
          Measure of temperature in Kelvin : <b>{convertedValue}  °K </b>
          </CardText>
          
        </Card>
      </div>
    );
  }
}
