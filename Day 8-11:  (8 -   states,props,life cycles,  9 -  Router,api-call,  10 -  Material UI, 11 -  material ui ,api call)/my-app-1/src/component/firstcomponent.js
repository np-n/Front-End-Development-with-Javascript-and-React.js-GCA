import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {MySecondComponent} from './secondcomponent'
import {withRouter} from 'react-router-dom'

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
        // looking props
        console.log(this.props)
        //  // This binding is necessary to make `this` work in the callback
        // this.handleChange = this.handleChange.bind(this)
    }

    // to handle change
    // using arrow function to bind this keyword
    handleChange= (event)=>{
        // to set state
        this.setState({
            [event.target.name]:event.target.value
        })
    }


    render(){
        return(
            <div className="headerName">
                <input type="text" onChange={this.handleChange} name="username" />
                <input type="text" onChange={this.handleChange} name="address"/>
                <input type="number" onChange={this.handleChange} name ="phone"/><br/>
                {/*  UserName: {this.state.username}<br/>
                address: {this.state.address}<br/>
                phone: {this.state.phone}<br/>  */}

                {/* sending props i.e state property to MySecondComponent , here Username, Address and Phone are props*/}
                <MySecondComponent
                username = {this.state.username}
                address = {this.state.address}
                phone ={this.state.phone}
                />
                <hr/>
                <Link to={{
                    pathname: "/calculator",
                    search: "?sort = name",
                    hash: "#the-hash"

                }}>
                <button>Go to Digital Calculator</button></Link>
                <button
                onClick={()=> this.props.history.push('/route-programatically',
                {name:this.state.username}
                )}>
                    change Route Programatically</button>
                <button
                onClick={()=> this.props.history.push('dynamicRoute/book/2343534')}>
                    Dynamic Route
                </button>

            </div>
        )
    }
}

export default withRouter(MyFirstComponent)