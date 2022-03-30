import React, { Component } from "react";

function Login() {
  return (
    <>
      <h3>LOGIN</h3>
    </>
  );
}

function Logout() {
  return (
    <>
      <h3>LOGOUT</h3>
    </>
  );
}

export default class RenderizadoCondicional extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: false,
    };
  }

  render() {
    return <>{this.state.user ? <Login></Login> : <Logout></Logout>}</>;
  }
}
