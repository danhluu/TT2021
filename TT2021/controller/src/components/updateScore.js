import React, { Component } from 'react'
import socketIOClient from "socket.io-client"
import './updateScore.css'
export class updateScore extends Component {
    constructor(props) {
        super(props);
        this.state = {score1: '', score2: '', score3:'', endpoint:'http://localhost:4000'};
    }
    handleSubmit = (event)=>{
      let scoreList = [{team:'', score:''},{team:'', score:''},{team:'', score:''}]
      scoreList[0].team = "doi1"
      scoreList[0].score= this.state.score1
      scoreList[1].team = "doi2"
      scoreList[1].score= this.state.score2
      scoreList[2].team = "doi3"
      scoreList[2].score= this.state.score3
      const socket = socketIOClient(this.state.endpoint ,{transports: ['websocket']});
      socket.emit('updateScore', scoreList)
      event.preventDefault();
    }
    HandleScore1Change = (event) =>{
      this.setState({score1:event.target.value});
    }
    HandleScore2Change = (event) =>{
      this.setState({score2:event.target.value});
    }
    HandleScore3Change = (event) =>{
      this.setState({score3:event.target.value});
    }
    render() {
        return (
        <form className="updateForm" onSubmit={this.handleSubmit}>
            <label>
              Đội 1
              <input type="text" value={this.state.score1} onChange={this.HandleScore1Change} />
            </label>
            <label>
              Đội 2
              <input type="text" value={this.state.score2} onChange={this.HandleScore2Change} />
            </label>
            <label>
              Đội 3
              <input type="text" value={this.state.score3} onChange={this.HandleScore3Change} />
            </label>
            <input type="submit" value="Cập nhật điểm" />
        </form>
        )
    }
}
export default updateScore