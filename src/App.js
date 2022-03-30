import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Component";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7, MasEventos } from "./components/Eventos";
import Padre from "./components/PadresHijos";

import CicloVida from "./components/CicloVida";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Componente name="aaron"></Componente>
        <hr />
        <Estado></Estado>
        <hr />
        <RenderizadoCondicional></RenderizadoCondicional>
        <hr />
        <RenderizadoElementos></RenderizadoElementos>
        <hr />
        <EventosES6 />
        <hr />
        <EventosES7 />
        <hr />
        <MasEventos />
        <hr />
        <Padre />
        <hr />
        <CicloVida />
      </header>
    </div>
  );
}

export default App;
