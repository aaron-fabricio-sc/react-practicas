import React, { Component } from "react";

const EstadoHijo = (props) => {
  return (
    <>
      <h3> {props.estadoHijo} </h3>
    </>
  );
};

export default class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
    setInterval(() => {
      this.setState({
        num: this.state.num + 1,
      });
    }, 400);
  }

  render() {
    return (
      <>
        <h1>El estado</h1>
        <div>{this.state.num} </div>
        <EstadoHijo estadoHijo={this.state.num}></EstadoHijo>
      </>
    );
  }
}
