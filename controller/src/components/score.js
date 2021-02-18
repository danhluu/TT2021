import React, { Component } from 'react'
import socketIOClient from "socket.io-client"
export default class score extends Component {
    state= {
       scoresList:[],
       endpoint: "http://localhost:4000"
    }
    componentDidMount(){
        const socket = socketIOClient(this.state.endpoint,{transports: ['websocket']})
        socket.on('updateScore', (scoresList)=>{
            this.setState({scoresList:scoresList})
        })
    }
    render() {
        return (
            <>{
                this.state.scoresList.map((scoresList)=>(
                    <div key={scoresList.team} className="scoresList">
                        <div  className = "teamName"> {scoresList.team}</div>
                        <div className = "score"> {scoresList.score}</div>
                    </div >
                ))
            }
            </>
        )
    }
}