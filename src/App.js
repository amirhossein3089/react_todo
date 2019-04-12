import React, { Component } from 'react';
import store from './store'
import './App.css';
import { observer } from "mobx-react";

const App = observer(
class App extends Component {
  render() {
    return (
      <div className="App">
        {store.time.toLocaleTimeString()}
        <div>
          <button
          onClick = {()=>store.pauseClock()}
          >
            pause
          </button>
          <button
          onClick = {()=>store.startClock()}
          >
            start
          </button>
        </div>

      </div>
    );
  }
}
);

export default App;
