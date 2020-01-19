import React, { Component } from 'react';

class Circle extends Component {
  render() {
    let { x1, x2, y1, y2 } = this.props;

    return <line x1={x1} x2={x2} y1={y1} y2={y2}></line>;
  }
}

export default Circle;
