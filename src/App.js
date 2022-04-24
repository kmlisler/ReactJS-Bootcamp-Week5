import Kelvin from "./Kelvin";
import Fahrenheit from "./Fahrenheit";
import Celcius from "./Celcius";
import React, { Component } from "react";
import { Container, Col, Row, Button } from "reactstrap";

class App extends Component {
  state = { currentTemperature: 0 };
  increaseTemperature = () => {
    this.setState({ currentTemperature: this.state.currentTemperature + 1 });
    // this.current çalışmadı , this.state.current olması gerek
  };
  render() {
    let celciusTitle = "Celcius";
    let fahrenheitTitle = "Fahrenheit";
    let kelvinTitle = "Kelvin";
    return (
      <div>
        <header>
          <Container className="mt-3">
            <Row>
              <div>
                <h2>Weather Control </h2>
                <b>Temperature now : {this.state.currentTemperature} Celcius</b>
                <br></br>
                <br></br>
                <Button color="primary" onClick={() => this.increaseTemperature()}>
                  Increase Temperature
                </Button>
                <br></br>
                <br></br>
              </div>
            </Row>

            <Row>
              <Col xs="4">
                <Celcius
                  currentTemperature={this.state.currentTemperature}
                  title={celciusTitle}
                />
              </Col>
              <Col xs="4">
                <Fahrenheit
                  currentTemperature={this.state.currentTemperature}
                  title={fahrenheitTitle}
                />
              </Col>
              <Col xs="4">
                <Kelvin
                  currentTemperature={this.state.currentTemperature}
                  title={kelvinTitle}
                />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}
export default App;
