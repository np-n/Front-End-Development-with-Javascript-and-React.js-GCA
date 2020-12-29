import React, { Component } from 'react'

export default class ClassExample extends Component {
    constructor(props){
        super(props)
        this.state={
            counter:0
        }
    }
    // handleChange=()=>{
    //     this.setState({
    //         counter:this.state.counter +1
    //     })
    // }

    handleChange=()=>{
        this.setState( previousState=>({
            counter:previousState.counter +1
        }))
    }
    render() {
        return (
            <div>
                <div>Count Value:{this.state.counter}</div>
                <button
                onClick={this.handleChange}
                >Increase Value</button>
                
            </div>
        )
    }
}
