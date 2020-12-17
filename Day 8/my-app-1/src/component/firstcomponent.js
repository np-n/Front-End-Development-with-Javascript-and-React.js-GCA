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
    }

    // to handle change
    handleChange = (event) => {
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