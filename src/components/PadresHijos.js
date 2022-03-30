import React, { Component } from "react";

export default class Padre extends Component {
  state = {
    contador: 0,
  };
  incrementador = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  render() {
    return (
      <>
        <h3>Padres e Hijos</h3>
        <p>
          contador
          <b> {this.state.contador} </b>
        </p>

        <Hijo msg="mensajito" incrementar={this.incrementador} />
      </>
    );
  }
}

function Hijo(props) {
  return (
    <>
      <h3>HIJO saluda {props.msg}</h3>
      <button onClick={props.incrementar}>++++++</button>
    </>
  );
}
