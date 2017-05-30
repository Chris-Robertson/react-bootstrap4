import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Alert } from './components/alert.js';
import { Button } from './components/button.js';
import { Nav } from './components/nav.js';

class App extends Component {
  render() {
    return (
      <div>
        <Alert alertType='success'>
          Success
        </Alert>
        <Alert alertType='warning'>
          Warning
        </Alert>
        <Alert alertType='info'>
          Info
        </Alert>
        <Alert alertType='danger'>
          Danger
        </Alert>
        <Button buttonType='primary'>
          Primary
        </Button>
        <Button buttonType='secondary'>
          Secondary
        </Button>
        <Button buttonType='success'>
          Success
        </Button>
        <Button buttonType='warning'>
          Warning
        </Button>
        <Button buttonType='info'>
          Info
        </Button>
        <Button buttonType='danger'>
          Danger
        </Button>
        <Button buttonType='link'>
          Link
        </Button>
        <nav className="nav">
          <Nav navType='active'>
            Active
          </Nav>
          <Nav>
            Link
          </Nav>
          <Nav navType='disabled'>
            Disabled
          </Nav>
        </nav>
      </div>
    );
  }
}

export default App;
