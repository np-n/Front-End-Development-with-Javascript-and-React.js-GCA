import React,{Component} from 'react';
import {MySecondComponent} from './secondcomponent'

class MyFirstComponent extends Component {

    /* state={
        username:"Netra"
     } */

    constructor(props){
        super(props)
        this.state = {
            username:"Netra"
        }
    }
    render(){
        return(
            <div>
                {this.state.username}
            </div>
        )
    }
}

export {MyFirstComponent}