import React, { Component } from "react";
class Celcius extends Component {
  render() {
    const sıcaklık = this.props.sıcaklık;
    const Celcius = sıcaklık;
    return (
      <div>
        <h4>Celcius: {Celcius}</h4>
      </div>
    );
  }
}

export default Celcius;
