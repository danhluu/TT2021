import React, { useState, useEffect, Component } from "react";
import Countdown from "./components/countDown";
import ControlPanel from "./components/controlPanel"
import UpdateScore from "./components/updateScore"
import Score from "./components/score"
import Announcement from "./components/announcement"
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Score/>
        <Announcement/>
        <UpdateScore/>
        <ControlPanel/>
      </div>

    );
  }
}
