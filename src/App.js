import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Alert } from './components/alert.js';
import { Button } from './components/button.js';
import { Nav } from './components/nav.js';
import { ButtonGroup } from './components/ButtonGroup.js';

class App extends Component {
  render() {
    return (
      <div className='container .p-3'>
        <div className='container mb-4'>
          <h1>Alerts</h1>
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
        </div>
        <div className='container mb-4'>
          <h1>Buttons</h1>
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
        </div>
        <div className='container mb-4'>
          <h1>Nav</h1>
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
        <div className='container mb-4'>
          <h1>Button Group</h1>
          <ButtonGroup>
            <Button buttonType='secondary'>
              One
            </Button>
            <Button buttonType='secondary'>
              Two
            </Button>
            <Button buttonType='secondary'>
              Three
            </Button>
            <Button buttonType='secondary'>
              Four
            </Button>
            <Button buttonType='secondary'>
              Five
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

export default App;
