import React, { Component } from 'react';

// import Counter from './containers/Counter/Counter';
import Person from './containers/Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Person />
      </div>
    );
  }
}

export default App;
