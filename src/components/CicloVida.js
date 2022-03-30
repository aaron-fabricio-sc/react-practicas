import React, { Component } from "react";

class Reloj extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    console.log(3, "el componente a sido desmontado");
  }

  render() {
    return <h3> {this.props.hora} </h3>;
  }
}

export default class CicloVida extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hora: new Date().toLocaleTimeString(),
      mostrar: false,
    };
    console.log(1, "el componente se inicializa pero no esta en el DOM");
    this.temporizador = null;
  }

  componentDidMount() {
    console.log(1, "el componente se encuentra en el DOM");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(2, "se actualizo el dom");
    console.log(prevProps);
    console.log(prevState);
  }

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  iniciar = () => {
    this.tictac();
    this.setState({ mostrar: true });
  };

  detener = () => {
    clearInterval(this.temporizador);
    this.setState({ mostrar: false });
  };

  render() {
    console.log(4, "se renderiza el componente");
    return (
      <>
        <h3>Ciclo de vida de los componestes</h3>
        {this.state.mostrar && <Reloj hora={this.state.hora} />}

        <button onClick={this.iniciar}>INICIAR</button>
        <button onClick={this.detener}>DETENER</button>
      </>
    );
  }
}
