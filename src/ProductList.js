import React, { Component } from "react";
import {Card,CardTitle,CardText,Button} from "reactstrap"

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3> bu {this.props.title} </h3>
        <Card body color="primary" inverse>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button>Button</Button>
        </Card>
      </div>
    );
  }
}
