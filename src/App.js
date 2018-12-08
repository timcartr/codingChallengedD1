import React, { Component } from 'react';
import './reset.css'
import './App.css';

// Import Components
import OnlineUsers from './components/OnlineUsers/OnlineUsers'

class App extends Component {
  render() {
    return (
      <div className="App">
        <OnlineUsers />
      </div>
    );
  }
}

export default App;