import React, { Component } from 'react'
import socketIOClient from "socket.io-client"
import './submitAnswer.css';
export default class SubmitAnswer extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '',value: '', endpoint:'http://localhost:4000'};
      }
    
      handleNameChange = (event) => {
        this.setState({name: event.target.value});
      }
      handleValueChange = (event) => {
        this.setState({value: event.target.value});
      }
      handleSubmit =(event) => {
        const socket = socketIOClient(this.state.endpoint ,{transports: ['websocket']});
        let data = {}
        data.team = this.state.name
        data.score = this.state.value
        socket.emit('submitAnswer', data)
        // alert('A name was submitted: ' + data);
        event.preventDefault();
      }
      render() {
        return (
          <form  onSubmit={this.handleSubmit}>
            
            <label className="Input-box">
              Đáp án:
              <input  type="text" value={this.state.answer} onChange={this.handleValueChange} />
            </label>
            <input className="Submit-box" type="submit" value="Submit" />
          </form>
        );
      }
}
