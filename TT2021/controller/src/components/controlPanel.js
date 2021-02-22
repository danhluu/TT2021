import React, { Component } from 'react'
import socketIOClient from "socket.io-client"
export class controlPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { endpoint:'http://localhost:4000'};
      }

    handleStart = (event)=>{
        const socket = socketIOClient(this.state.endpoint ,{transports: ['websocket']});
        let status = 'start'
        socket.emit('nmtc-status', status)
        event.preventDefault();
    }
    handleShowCipher = (event)=>{
        const socket = socketIOClient(this.state.endpoint ,{transports: ['websocket']});
        let status = 'showCipher'
        socket.emit('nmtc-show-cipher', status)
        event.preventDefault();
    }
    handlePause = (event)=>{
        const socket = socketIOClient(this.state.endpoint ,{transports: ['websocket']});
        let status = 'pause'
        socket.emit('nmtc-status', status)
        event.preventDefault();
    }
    handleShowKey = (event)=>{
        const socket = socketIOClient(this.state.endpoint ,{transports: ['websocket']});
        let status = 'showKey'
        socket.emit('nmtc-show-key', status)
        event.preventDefault();
    }
    handleShowAnswer = (event)=>{
        const socket = socketIOClient(this.state.endpoint ,{transports: ['websocket']});
        let status = 'showAnswer'
        socket.emit('nmtc-show-all-answer', status)
        event.preventDefault();
    }
    handleShowTeam = team => (event)=>{
        const socket = socketIOClient(this.state.endpoint ,{transports: ['websocket']});
        let data = {}
        data.detail = 'showTeam'
        data.team = team;
        socket.emit('nmtc-show-team', data)
        event.preventDefault();
    }
    render() {
        return (
            <>
            <button onClick={this.handleStart}>Bắt Đầu</button>
            <button onClick={this.handlePause}>Tạm Dừng</button>
            <button onClick={this.handleShowCipher}>Hiện Mã</button>
            <button onClick={this.handleShowKey}>Hiện Khóa</button>
            <br/>
            <button onClick={this.handleShowAnswer}>Hiện Đáp Án</button>
            <button onClick={this.handleShowTeam("1")}>Đội 1</button>
            <button onClick={this.handleShowTeam("2")}>Đội 2</button>
            <button onClick={this.handleShowTeam("3")}>Đội 3</button>
            </>
        );
    }
}

export default controlPanel
