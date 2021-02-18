import React, { Component } from 'react'

export default class score extends Component {
    state= {
       scoresList:[],
    }
    componentDidMount(){
        fetch('data.json',{ 
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(
            (result) => {
                this.setState({scoresList: result});
            },
            )
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