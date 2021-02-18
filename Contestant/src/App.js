import React, { useState, useEffect, Component } from "react";
import Countdown from "./components/countDown";
import SubmitAnswer from "./components/submitAnswer";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-title">Timer</div>
        <div className="Timers">
            <Countdown />
        </div>
        <div className="SubmitAnswer">
            <SubmitAnswer/>
        </div>
      </div>
    );
  }
}
