import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import StateHook from './components/StateHook';
import UseStateSample from './components/UseStateSample';
import UseStateSample2 from './components/UseStateSample2';
import UseStateSample4 from './components/UseStateSample4';
import UseEffectSample1 from './components/UseEffectSample1';
import UseContextSample from './components/UseContextSample';
import UseReducerSample from './components/UseReducerSample';
import UseReducerSample2 from './components/UseReducerSample2';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*
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
        </header>
        */}
        <StateHook />
        <UseStateSample />
        <UseStateSample2 />
        <UseStateSample4 />
        <UseEffectSample1 />
        <UseContextSample />
        <UseReducerSample />
        <UseReducerSample2 initialMonth={10} />
      </div>
    );
  }
}

export default App;
