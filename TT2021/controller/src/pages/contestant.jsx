import React, { Component } from "react";
import CountDown from "../components/countDown";
import "../components/countDown.css";
import './style.css'
import SubmitAnswer from "../components/submitAnswer";

export default class App extends Component {
  render() {
    return (
      <>

        <link rel="stylesheet" href="./style.css"></link>
        <link rel="stylesheet" href="images/..."></link>
        <div className="App">
          <img className='logo' src="logoTT.png" alt="logo thach thuc 2021"></img>
          <div className="Timer-header">
            <span class="title">Nối mạng toàn cầu</span>
            <CountDown />
          </div>
          <div>
            <SubmitAnswer />
          </div>
        </div>
      </>
    );
  }
}
