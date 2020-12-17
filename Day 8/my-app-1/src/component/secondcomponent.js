import React,{Component} from 'react'

class MySecondComponent extends Component {
    render(){
        return(
            <div>
                {/* geting props from MyFirstComponent component, assessed using .props method*/}
                Username: {this.props.username}<br/>
                Address : {this.props.address}<br/>
                Phone :{this.props.phone}
                </div>
        )
    }
}

export {MySecondComponent}