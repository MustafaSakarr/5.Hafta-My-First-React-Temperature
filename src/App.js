import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Celcius from "./Celcius";
import Fahrenheit from "./Fahrenheit";
import Kelvin from "./Kelvin";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { mesaj: "siteye giriş", sıcaklık: 0 };
  }

  sıcaklıkarttır = () => {
    this.setState({ ...this.state, sıcaklık: this.state.sıcaklık + 1 });
  };
  sıcaklıkazalt = () => {
    this.setState({ ...this.state, sıcaklık: this.state.sıcaklık - 1 });
  };

  render() {
    return (
      <Container>
        <Row></Row>
        <Row>
          <h3>Şuan ki sıcaklık: {this.state.sıcaklık} Derece</h3>
        </Row>

        <Button id="primary" onClick={this.sıcaklıkarttır}>
          {" "}
          Arttır
        </Button>

        <Row>
          <Button id="info" onClick={this.sıcaklıkazalt}>
            Azalt{" "}
          </Button>
        </Row>
        <Row>
          <Col xs="4">
            <Celcius sıcaklık={this.state.sıcaklık} />
          </Col>

          <Col xs="4">
            <Fahrenheit sıcaklık={this.state.sıcaklık} />
          </Col>

          <Col xs="3">
            <Kelvin sıcaklık={this.state.sıcaklık} />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default App;
