import React from 'react';
import logo from './logo.svg';
import Form from './Form1';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-content">
          <img src={logo} className="App-logo" alt="React" />
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
