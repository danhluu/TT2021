import React, { Component } from "react";
import "../App.css";
import socketIOClient from "socket.io-client"

class setTime extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    timerValue: '',
    endpoint:"http://localhost:4000"
  };
  componentDidMount(){
    const socket = socketIOClient(this.state.endpoint,{transports: ['websocket']})
    socket.on('nmtc-status', (state) =>{
      if(state == 'pause')
      this.stopTimer()
      else if (state == 'start')
      this.startTimer()
    })
  }

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,  
      timerStart: this.state.timerTime
    });
    this.timer = setInterval(() => {
      let newTime = this.state.timerTime - 10;
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime
        });
      } else {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
      }
    }, 10);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };
  resetTimer = () => {
    if (this.state.timerOn === false) {
      this.setState({
        timerStart: 0,
        timerTime: 0
      });
    }
  };
  
  setTimer = input => {
    
    if (!this.state.timerOn) {
      if (input*1000 < 216000000) {
        
        this.setState({ timerTime: input*1000 });
      }
    }
  };
  
  handleChange = event=> {
    this.setState({timerValue: Number(event.target.value)});
  }

  handleClick= ()=> {
    this.setTimer(this.state.timerValue)
    const socket = socketIOClient(this.state.endpoint, {transports: ['websocket']})
    socket.emit('nmtc-set-time', this.state.timerTime);
  }

  render() {
    const { timerTime } = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);

    return (
      <div className="Countdown">
        <div className="Countdown-display">
        <div>
        <input type="text" onChange={this.handleChange} />
        <input type="button"  value="Set time"
          onClick={this.handleClick}
        />
      </div>
          
          <div className="Countdown-time">
            {minutes} : {seconds}
          </div>
        </div>
      </div>
    );
  }
}
export default setTime;