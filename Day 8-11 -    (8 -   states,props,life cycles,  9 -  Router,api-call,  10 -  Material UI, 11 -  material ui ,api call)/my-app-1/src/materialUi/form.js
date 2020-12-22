import { TextField } from '@material-ui/core'
import React, { Component } from 'react'

export default class FormExample extends Component {
    constructor(props){
        super(props)
        this.state ={
            name:"",
        }
    }

    handleChange =(event)=>{
        this.setState({
            [event.target.id]:event.target.value
        })
    }
    render() {
        return (
            <div>
                <TextField
                style={{marginBottom:20,color='white'}}
                id="name"
                label="Enter name"
                variant ="outlined"
                value ={this.state.name}
                placeholder="Enter name"
                helperText="Please Enter valid Name"
                error ={false}
                disabled ={false}
                fullWidth={true}
                onChange={this.handleChange}
                >
                 </TextField>
                 <br/>
                 Name : {this.state.name}

            </div>
        )
    }
}
