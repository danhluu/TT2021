import React, { Component } from "react";
import "../App.css";
import socketIOClient from 'socket.io-client'
class CountDown extends Component {
  state = {
    timerStart: 0,
    timerTime: 0,
    timerValue: '',
    endpoint: 'http://localhost:4000'
  };

  startTimer = () => {
    this.setState({
      timerTime: this.state.timerTime,  
      timerStart: this.state.timerTime
    });
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 10;
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime
        });
      } else {
        clearInterval(this.timer);
      }
    }, 10);
  };
  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };
  componentDidMount() {
   const socket = socketIOClient(this.state.endpoint, {transports:['websocket']})
   socket.on('nmtc-set-time', (time)=>{
    this.setState({timerTime:Number(time)})
  })
  socket.on('nmtc-status', (state) =>{
    if(state == 'pause')
    this.stopTimer()
    else if (state == 'start')
    this.startTimer()
  })
  }

  render() {
    const { timerTime} = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);

    return (
      
        <div className="Countdown-time">
           {minutes} : {seconds}
        </div>
    ); 
  }
}

export default CountDown;
