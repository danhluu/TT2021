import React, { Component } from "react";
import "../App.css";

class countDown extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    timerValue: ''
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
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
  }

  render() {
    const { timerTime, timerStart, timerOn } = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

    return (
      
      <div className="Countdown">
        <div className="Countdown-header">Countdown</div>
        
        <div className="Countdown-display">
        <div>
        <input type="text" onChange={this.handleChange} />
        <input type="button"  value="Set time"
          onClick={this.handleClick}
        />
      </div>
          
          <div className="Countdown-time">
            {hours} : {minutes} : {seconds}
          </div>
        </div>

        {timerOn === false && (timerStart === 0 || timerTime === timerStart) && (
          <button className="Button-start" onClick={this.startTimer}>
            Start
          </button>
        )}
        
        {timerOn === true && timerTime >= 1000 && (
          <button className="Button-stop" onClick={this.stopTimer}>
            Stop
          </button>
        )}
        {timerOn === false &&
          (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
            <button className="Button-start" onClick={this.startTimer}>
              Resume
            </button>
          )}

        {(timerOn === false || timerTime < 1000) &&
          (timerStart !== timerTime && timerStart > 0) && (
            <button className="Button-reset" onClick={this.resetTimer}>
              Reset
            </button>
          )}
      </div>
    );
  }
}

export default countDown;
