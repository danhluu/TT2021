import React, { Component } from "react";
import CountDown from "../components/countDown";
import SubmitAnswer from "../components/submitAnswer";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Timers">
            <CountDown />
        </div>
        <div className="SubmitAnswer">
            <SubmitAnswer/>
        </div>
      </div>
    );
  }
}
