import React,{Component} from 'react'
import { MyThirdComponent } from './thirdcomponent'

class MySecondComponent extends Component {

    callFromMyThirdComponent =(name) =>{
        alert('Hello '+ name)
    }
    render(){
        return(
            <div>
                {/* geting props from MyFirstComponent component, assessed using .props method*/}
                Username: {this.props.username}<br/>
                Address : {this.props.address}<br/>
                Phone :{this.props.phone}
                <hr/>
                <MyThirdComponent
                my_name = "Netra Prasad Neupane"
                callfrommythirdcomponent = {this.callFromMyThirdComponent}
                />
                </div>
        )
    }
}

export {MySecondComponent}