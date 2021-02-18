import React, { Component } from "react";
import "../App.css";

class countDown extends Component {
  state = {
    timerStart: 0,
    timerTime: 0,
    timerValue: ''
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
  
  componentDidMount() {
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            timerValue: result.time
          });
          if(result.status === 'start')
          this.startTimer();
          // else if (result.status === 'pause')


        },
      )
  }
  handleChange = event=> {
    this.setState({timerValue: Number(event.target.value)});
  }

  render() {
    const { timerTime} = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

    return (
      <div className="Countdown">
        <div className="Countdown-header">Countdown</div>
        
        <div className="Countdown-display">
          <div className="Countdown-time">
            {hours} : {minutes} : {seconds}
          </div>
        </div>
      </div>
    );
  }
}

export default countDown;
