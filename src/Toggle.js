import React, { Component } from 'react'

export default class Toggle extends Component {
    state = {
        on: false,
    }

    toggle = () =>{
        this.setState({
            on: !this.state.on
        })
    }

    render() {
        return (
            <div>
                {
                    if(this.state.on){
                        toggle me!        
                    }
                }
                <button>Shouw Hi</button>
            </div>
        )
    }
}
