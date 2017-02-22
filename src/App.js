import React, { Component } from 'react';
import Input from './Component/input/Input';
import Header from './Component/header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Input/>
      </div>
    );
  }
}

export default App;
