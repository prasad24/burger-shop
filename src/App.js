import React, { Component } from 'react';
import classes from  './App.css';
import Burger from './containers/Burger/Burger';

class App extends Component {

  render() {
    return (
      <div className={classes.App}>
        <Burger></Burger>
      </div>
    );
  }
}

export default App;
