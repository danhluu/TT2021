import React, { Component } from 'react'
import socketIOClient from "socket.io-client"
import './announcement.css'

export class announcement extends Component {
    state= {endpoint:"http://localhost:4000",cipher:'', key:'', doi1:'',doi2:'',doi3:'', answer:'' }
    componentDidMount(){
        const socket = socketIOClient(this.state.endpoint,{transports: ['websocket']})
        socket.on('nmtc-show-cipher', (cipher)=>{
            this.setState({cipher:cipher})
        })
        socket.on('nmtc-show-key', (key)=>{
            this.setState({key:key})
        })
        socket.on('nmtc-show-all-answer', (answer)=>{
            this.setState({answer:answer})
        })
        socket.on('nmtc-show-team', (answer)=>{
            switch(answer.team){
                case '1':
                    this.setState({doi1:answer.detail});
                    break;
                case '2':
                    this.setState({doi2:answer.detail});
                    break
                case '3':
                    this.setState({doi3:answer.detail});
            }
        })
    }
    render() {
        return (
            <div>
                <div>Cipher: {this.state.cipher} </div>
                <div>Key: {this.state.key} </div>
                <div>Đội 1: {this.state.doi1} </div>
                <div>Đội 2: {this.state.doi2} </div>
                <div>Đội 3: {this.state.doi3} </div>
                <div>Answer: {this.state.answer} </div>
            </div>
        )
    }
}

export default announcement
