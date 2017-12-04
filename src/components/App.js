import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Login from "./authentication/Login";
import Register from "./authentication/Register";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Lets Chat</h1>
        </header>
        <p className="App-intro">
          Lets get started.
            <Login/>
            <Register/>
        </p>
      </div>
    );
  }
}

export default App;
