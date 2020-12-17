import React,{Component} from 'react'
import  {MyThirdComponent} from './thirdcomponent'


class MySecondComponent extends Component {
    render(){
        return(
            <div>
                {/* geting props from MyFirstComponent component */}
                Username: {this.props.username}<br/>
                Address : {this.props.address}<br/>
                Phone :{this.props.phone}
                </div>
        )
    }
}

export {MySecondComponent}