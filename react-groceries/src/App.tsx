import React, { Component } from 'react';
import './App.css';
import { Title } from './title/Title';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title text="React Groceries" />
      </div>
    );
  }
}

export default App;
