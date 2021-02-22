import React, { Component } from "react";
import CountDown from "../components/countDown";
import "../components/countDown.css";
import './style.css'
import SubmitAnswer from "../components/submitAnswer";

export default class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="Timer-header">
          <span class="title">Nối mạng toàn cầu</span>
          <CountDown />
        </div>
        <div>
          <SubmitAnswer />
        </div>
      </div>

    );
  }
}
