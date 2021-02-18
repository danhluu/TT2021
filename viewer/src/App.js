import React, { useState, useEffect, Component } from "react";
import Countdown from "./components/countDown";
import Score from "./components/score";
import Announcement from"./components/announcement";
import './App.css'
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-title">Timer</div>
        <div className="Timers">
            <Countdown />
        </div>
        <Announcement/>
        <Score/>
      </div>

    );
  }
}
