import React, { Component } from "react";
class Kelvin extends Component {
  render() {
    const sıcaklık = this.props.sıcaklık;
    const Kelvin = sıcaklık + 273.15;
    return (
      <div>
        <h4>Celcius: {Kelvin}</h4>
      </div>
    );
  }
}

export default Kelvin;
