import React,{Component} from 'react';
import {MySecondComponent} from './secondcomponent'

class MyFirstComponent extends Component {

    /* state={
        username:"Netra"
     } */
    // state
    constructor(props){
        super(props)
        this.state = {
            username:""
        }
        //  // This binding is necessary to make `this` work in the callback
        // this.handleChange = this.handleChange.bind(this)
    }

    // to handle change
    // using arrow function to bind this
    handleChange= (event)=>{
        // to set state
        this.setState({
            username:event.target.value
        })
    }

    render(){
        return(
            <div>
                <input type="text" onChange={this.handleChange}/><br/>
                {this.state.username}
            </div>
        )
    }
}

export {MyFirstComponent}