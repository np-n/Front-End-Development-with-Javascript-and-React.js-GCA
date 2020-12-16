import React,{Component} from 'react';
import {MySecondComponent} from './secondcomponent'

class MyFirstComponent extends Component {
    render(){
        return(
            <div>This is my First component.
                <MySecondComponent/>
            </div>
        )
    }
}

export {MyFirstComponent}