import React, { Component } from "react";
import datos from "../helpers/data.json";
function ListaElementos(props) {
  return (
    <li>
      <a href={props.web}>{props.name} </a>
    </li>
  );
}
console.log(datos);
export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seassons: ["invierno", "verano", "primavera", "otoño"],
    };
  }

  render() {
    return (
      <>
        <h3>Renderizado de elementos</h3>
        <ol>
          {this.state.seassons.map((el) => (
            <li key={el}> {el} </li>
          ))}
        </ol>

        <h3>lista de framewors</h3>
        <ul>
          {datos.frameworks.map((el, index) => {
            return (
              <ListaElementos
                key={el.id}
                web={el.web}
                name={el.name}
                id={el.id}
              />
            );
          })}
        </ul>
      </>
    );
  }
}
