import React, { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar() {
    console.log("sumando");
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar() {
    console.log("restando");
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <>
        <h3>Eventos con ES6</h3>

        <h4>{this.state.contador}</h4>

        <button onClick={this.sumar}> + </button>
        <button onClick={this.restar}> - </button>
      </>
    );
  }
}

export class EventosES7 extends Component {
  state = {
    contador: 0,
  };
  sumar = () => {
    console.log("sumando");
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = () => {
    console.log("restando");
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <>
        <h3>Eventos CON ES7</h3>

        <h4>{this.state.contador}</h4>

        <button onClick={this.sumar}> + </button>
        <button onClick={this.restar}> - </button>
      </>
    );
  }
}

const Boton = (props) => (
  <button onClick={props.myOnClick}>Boton Componente</button>
);

export class MasEventos extends Component {
  eventoEnConsola = (e, msg) => {
    console.log(e);
    console.log(e.target);
    console.log(e.nativeEvent);
    console.log(e.nativeEvent.target);
    console.log(msg);
  };
  render() {
    return (
      <>
        <h3>Mas eventos</h3>
        <button
          onClick={(e) =>
            this.eventoEnConsola(e, "hola saludo desde un parametro")
          }
        >
          evento en consola
        </button>

        <Boton
          myOnClick={(e) =>
            this.eventoEnConsola(e, "hola saludo desde un parametro")
          }
        />
      </>
    );
  }
}
