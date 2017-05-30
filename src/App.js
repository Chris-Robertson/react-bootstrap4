import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Alert } from './components/alert.js';

class App extends Component {
  render() {
    return (
      <div>
        <Alert alertType='success'>
          Success!
        </Alert>
        <Alert alertType='warning'>
          Warning!
        </Alert>
        <Alert alertType='info'>
          Info!
        </Alert>
        <Alert alertType='danger'>
          Danger!
        </Alert>
      </div>
    );
  }
}

export default App;
