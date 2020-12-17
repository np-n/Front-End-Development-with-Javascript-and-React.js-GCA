import React,{Component} from 'react';
import {MySecondComponent} from './secondcomponent'

class MyFirstComponent extends Component {

    /* state={
        username:""
     } */
    // state
    constructor(props){
        super(props)
        this.state = {
            username:"",
            address:"",
            phone:"",
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

    handleChange1= (event)=>{
        // to set state
        this.setState({
            address:event.target.value
        })
    }
    handleChange2= (event)=>{
        // to set state
        this.setState({
            phone:event.target.value
        })
    }

    render(){
        return(
            <div>
                <input type="text" onChange={this.handleChange} name="username" />
                <input type="text" onChange={this.handleChange1} address="address"/>
                <input type="text" onChange={this.handleChange2} phone ="phone"/><br/>
                UserName: {this.state.username}<br/>
                address: {this.state.address}<br/>
                phone: {this.state.phone}<br/>
            </div>
        )
    }
}

export {MyFirstComponent}