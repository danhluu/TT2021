import React, { Component } from "react";
import CountDown from "../components/countDown";
import "../components/countDown.css";
import Score from "../components/score";
import Announcement from "../components/announcement";
export default class Viewer extends Component {
  render() {
    return (
      <div className="App">
        <div >
          <CountDown />
        </div>
        <Announcement />
        <Score />
      </div>

    );
  }
}
