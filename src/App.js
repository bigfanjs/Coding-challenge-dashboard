import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import ActionBar from './action-bar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ActionBar />
      </div>
    );
  }
}

export default App;